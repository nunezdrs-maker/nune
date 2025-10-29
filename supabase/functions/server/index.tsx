import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-946c286b/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint to check API key configuration
app.get("/make-server-946c286b/check-config", (c) => {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  return c.json({ 
    hasResendKey: !!resendApiKey,
    keyPrefix: resendApiKey ? resendApiKey.substring(0, 5) + "..." : "NOT_FOUND",
    keyLength: resendApiKey ? resendApiKey.length : 0
  });
});

// Send booking email endpoint
app.post("/make-server-946c286b/send-booking", async (c) => {
  try {
    console.log("Recibiendo solicitud de reserva...");
    const bookingData = await c.req.json();
    console.log("Datos de reserva recibidos:", JSON.stringify(bookingData, null, 2));
    
    const { nombre, email, telefono, tipoCliente, ciudad, direccion, caso, fecha, hora } = bookingData;

    // Validate required fields
    if (!nombre || !email || !telefono || !fecha || !hora) {
      console.error("Validación fallida: campos requeridos faltantes", { nombre, email, telefono, fecha, hora });
      return c.json({ error: "Faltan campos requeridos" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("Verificando RESEND_API_KEY...", {
      exists: !!resendApiKey,
      length: resendApiKey?.length || 0,
      prefix: resendApiKey?.substring(0, 5) || "N/A"
    });
    
    if (!resendApiKey) {
      console.error("Error al enviar email de reserva: RESEND_API_KEY no está configurada");
      return c.json({ error: "Servicio de email no configurado. Por favor contacta al administrador." }, 500);
    }
    
    console.log("API key de Resend encontrada, preparando email...");

    // Prepare email content
    const emailHtml = `
      <h2>Nueva Solicitud de Intervención - DESOKUPA</h2>
      <p><strong>Fecha y Hora:</strong> ${fecha} a las ${hora}</p>
      <hr />
      <h3>Datos del Cliente</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Tipo de Cliente:</strong> ${tipoCliente || 'No especificado'}</p>
      <hr />
      <h3>Datos del Inmueble</h3>
      <p><strong>Ciudad:</strong> ${ciudad}</p>
      <p><strong>Dirección:</strong> ${direccion}</p>
      <hr />
      <h3>Descripción del Caso</h3>
      <p>${caso}</p>
    `;

    // Send email using Resend
    console.log("Enviando email a Resend...");
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DESOKUPA Reservas <reservas@desokupacionleal.es>",
        to: ["gestion@desokupacionleal.es"],
        subject: `Nueva Reserva DESOKUPA - ${nombre} - ${fecha} ${hora}`,
        html: emailHtml,
      }),
    });

    console.log("Respuesta de Resend recibida. Status:", resendResponse.status);

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Error en respuesta de Resend al enviar email de reserva:", errorData);
      return c.json({ error: `Error al enviar el email: ${errorData}. Por favor, inténtalo de nuevo o contacta por teléfono.` }, 500);
    }

    const resendData = await resendResponse.json();
    console.log("Email de reserva enviado exitosamente:", resendData);

    // Store booking in KV store for record keeping
    try {
      console.log("Guardando reserva en KV store...");
      const bookingId = `booking_${Date.now()}`;
      await kv.set(bookingId, {
        ...bookingData,
        emailSentId: resendData.id,
        createdAt: new Date().toISOString()
      });
      console.log("Reserva guardada exitosamente con ID:", bookingId);
    } catch (kvError) {
      // Log error but don't fail the request since email was sent
      console.error("Error al guardar en KV store (email ya enviado):", kvError);
    }

    return c.json({ 
      success: true, 
      message: "Reserva enviada correctamente",
      emailId: resendData.id
    });

  } catch (error) {
    console.error("Error al procesar reserva:", error);
    return c.json({ 
      error: "Error al procesar la reserva. Por favor, inténtalo de nuevo o contacta por teléfono al 614 013 211." 
    }, 500);
  }
});

Deno.serve(app.fetch);
