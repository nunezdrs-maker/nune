import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoCliente: "",
    ciudad: "",
    direccion: "",
    caso: ""
  });

  const timeSlots = ["10:00", "12:00", "16:00", "18:00"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime) {
      toast.error("Por favor selecciona una fecha y hora");
      return;
    }

    // Format the booking data
    const bookingData = {
      ...formData,
      fecha: date.toLocaleDateString('es-ES'),
      hora: selectedTime,
    };

    console.log("Enviando reserva con datos:", bookingData);

    try {
      // Send booking to server
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-946c286b/send-booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      console.log("Respuesta del servidor - Status:", response.status);

      if (!response.ok) {
        let errorMessage = "Error al enviar la reserva";
        try {
          const errorData = await response.json();
          console.error("Error al enviar reserva:", errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          const errorText = await response.text();
          console.error("Error al parsear respuesta de error:", errorText);
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("Reserva enviada exitosamente:", result);
      
      toast.success("¡Reserva enviada correctamente!", {
        description: `Recibirás la confirmación en ${formData.email}. Nuestro equipo te contactará pronto.`
      });
      
      // Reset form
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoCliente: "",
        ciudad: "",
        direccion: "",
        caso: ""
      });
      setDate(new Date());
      setSelectedTime("");
      
    } catch (error) {
      console.error("Error al procesar reserva:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Error desconocido al enviar la reserva";
      toast.error(`Error: ${errorMessage}`, {
        description: "Por favor, contacta directamente al 614 013 211"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservar" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Solicitar Intervención</h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            Reserva una consulta gratuita con nuestros expertos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="tipoCliente">Tipo de cliente</Label>
                  <Select 
                    value={formData.tipoCliente} 
                    onValueChange={(value) => handleInputChange("tipoCliente", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="particular">Particular</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="inmobiliaria">Inmobiliaria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="ciudad">Ciudad</Label>
                <Input
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={(e) => handleInputChange("ciudad", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="direccion">Dirección del inmueble</Label>
                <Input
                  id="direccion"
                  value={formData.direccion}
                  onChange={(e) => handleInputChange("direccion", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="caso">Cuéntanos tu caso</Label>
                <Textarea
                  id="caso"
                  value={formData.caso}
                  onChange={(e) => handleInputChange("caso", e.target.value)}
                  rows={4}
                  required
                  className="mt-1"
                  placeholder="Cuéntanos los detalles de tu situación..."
                />
              </div>

              {/* Calendar and Time Selection */}
              <div className="mb-6">
                <Label className="mb-4 block">Selecciona día y hora</Label>
                <div className="bg-white px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 rounded-lg border border-slate-200">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    classNames={{
                      months: "flex w-full",
                      month: "flex flex-col w-full gap-4 md:gap-6",
                      caption: "flex justify-center relative items-center mb-4 md:mb-6",
                      caption_label: "text-base md:text-lg",
                      nav: "flex items-center gap-1",
                      nav_button: "size-7 md:size-8 bg-transparent p-0 opacity-50 hover:opacity-100 border border-slate-300 rounded-md",
                      nav_button_previous: "absolute left-0",
                      nav_button_next: "absolute right-0",
                      table: "w-full border-collapse",
                      head_row: "flex w-full",
                      head_cell: "w-full text-center text-slate-400 py-2 md:py-3 text-xs md:text-sm",
                      row: "flex w-full mt-2 md:mt-3",
                      cell: "relative w-full p-0 text-center",
                      day: "h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-auto p-0 bg-transparent hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center aria-selected:bg-brand aria-selected:text-white aria-selected:hover:bg-brand text-sm md:text-base",
                      day_selected: "bg-brand text-white hover:bg-brand",
                      day_today: "bg-transparent",
                      day_outside: "text-slate-300",
                      day_disabled: "text-slate-300 opacity-50",
                    }}
                    disabled={(date) => date < new Date()}
                  />
                  
                  <div className="mt-6 md:mt-8 lg:mt-10 pt-6 md:pt-8 border-t border-slate-200">
                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4 justify-center">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-xl border-2 transition-colors text-sm md:text-base ${
                            selectedTime === time
                              ? "bg-brand text-white border-brand"
                              : "bg-white border-slate-300 hover:border-brand-light"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand hover:bg-brand-dark text-white py-5 sm:py-6 text-sm sm:text-base"
              >
                Enviar Reserva y Diagnóstico
              </Button>
            </form>
          </div>

          {/* Contact Info - 1 column */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="mb-4 text-base sm:text-lg">Contacto Directo</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Teléfono 24/7</div>
                    <div className="text-amber-600">614 013 211</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Email</div>
                    <div className="text-amber-600 break-all">gestion@desokupacionleal.es</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Cobertura</div>
                    <div className="text-slate-500">Nacional (España)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Attention */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-lg">
              <h3 className="mb-2 text-base sm:text-lg">Atención de Urgencia</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-2">
                ¿Actuáis de inmediato ante ocupación?
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Respuesta en menos de 2 horas
              </p>
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 sm:py-5 text-sm sm:text-base"
                asChild
              >
                <a href="tel:614013211">
                  Llamada de Urgencia
                </a>
              </Button>
            </div>

            {/* Certifications */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-lg border border-slate-200">
              <h4 className="mb-3 text-base sm:text-lg">Certificaciones</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Colegio de Abogados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  ISO 9001 Calidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  GDPR Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
