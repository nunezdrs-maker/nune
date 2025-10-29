# 📋 Checklist Post-Deploy

Después de desplegar la aplicación, sigue estos pasos para asegurar que todo funcione correctamente.

## ✅ Verificación Inmediata (5 min)

### 1. La aplicación está en línea
```bash
fly open
```
- [ ] La web carga correctamente
- [ ] No hay errores en la consola del navegador
- [ ] Las imágenes cargan

### 2. Verificar logs
```bash
fly logs
```
- [ ] No hay errores críticos
- [ ] El servidor responde correctamente

### 3. Verificar estado
```bash
fly status
```
- [ ] Estado: `running`
- [ ] Health checks: `passing`

---

## 🔍 Testing Funcional (10 min)

### 1. Navegación
- [ ] Todos los botones del menú funcionan
- [ ] Scroll suave funciona
- [ ] Enlaces externos abren correctamente

### 2. Hero Section
- [ ] Logo se muestra
- [ ] Carrusel de imágenes funciona
- [ ] Estadísticas son visibles
- [ ] Botones funcionan

### 3. Formulario de Reservas
- [ ] Calendario se abre
- [ ] Se pueden seleccionar fechas
- [ ] Todos los campos son editables
- [ ] Validación funciona

### 4. Envío de Email
```bash
# Verificar que RESEND_API_KEY está configurada
fly secrets list
```
- [ ] Enviar un formulario de prueba
- [ ] Verificar que llegue el email a `gestion@desokupacionleal.es`
- [ ] El formato del email es correcto

### 5. Descarga de PDFs
- [ ] "Guía Legal Antiokupa 2025" se descarga
- [ ] "Checklist de Prevención" se descarga
- [ ] Los PDFs se abren correctamente
- [ ] El contenido es correcto

### 6. Cookies y Legal
- [ ] Banner de cookies aparece
- [ ] Se puede aceptar/rechazar cookies
- [ ] Links a Términos y Política de Cookies funcionan
- [ ] Modales de términos legales se abren

---

## 📱 Testing Responsive (5 min)

### Mobile (320px - 767px)
- [ ] Layout se adapta correctamente
- [ ] Textos son legibles
- [ ] Botones son clickeables
- [ ] Imágenes no se distorsionan
- [ ] Formulario es usable

### Tablet (768px - 1023px)
- [ ] Grid se ajusta correctamente
- [ ] Espaciado es apropiado
- [ ] Navegación funciona bien

### Desktop (1024px+)
- [ ] Layout completo se muestra
- [ ] Elementos centrados correctamente
- [ ] Hover effects funcionan

---

## 🎨 Verificación Visual (5 min)

- [ ] Colores de marca correctos (#fbbf24 - dorado)
- [ ] Fuentes se cargan correctamente
- [ ] Iconos se muestran
- [ ] Sombras y bordes se ven bien
- [ ] Animaciones son suaves

---

## 🔐 Seguridad (5 min)

### 1. HTTPS
- [ ] La web usa HTTPS (candado verde)
- [ ] Certificado SSL es válido
- [ ] No hay warnings de contenido mixto

### 2. Headers de Seguridad
```bash
curl -I https://tu-app.fly.dev
```
- [ ] Content-Type correcto
- [ ] No expone información sensible

### 3. Variables de Entorno
```bash
fly secrets list
```
- [ ] SUPABASE_URL ✓
- [ ] SUPABASE_ANON_KEY ✓
- [ ] SUPABASE_SERVICE_ROLE_KEY ✓
- [ ] SUPABASE_DB_URL ✓
- [ ] RESEND_API_KEY ✓

⚠️ **IMPORTANTE**: NUNCA expongas estos valores en el código frontend

---

## 🚀 Performance (10 min)

### 1. Google PageSpeed Insights
Ve a: https://pagespeed.web.dev/

Prueba tu URL y verifica:
- [ ] Performance Score > 90
- [ ] Accessibility Score > 90
- [ ] Best Practices Score > 90
- [ ] SEO Score > 90

### 2. Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### 3. Lighthouse
Abre Chrome DevTools → Lighthouse → Run

- [ ] Performance: ⚡ > 90
- [ ] Accessibility: ♿ > 90
- [ ] Best Practices: ✅ > 90
- [ ] SEO: 🔍 > 90

---

## 📊 SEO (5 min)

### 1. Meta Tags
Ver fuente de la página (Ctrl+U):
- [ ] Title tag está presente
- [ ] Meta description está presente
- [ ] Open Graph tags para redes sociales
- [ ] Twitter Card tags
- [ ] Canonical URL

### 2. Sitemap y Robots
- [ ] `https://tu-app.fly.dev/sitemap.xml` accesible
- [ ] `https://tu-app.fly.dev/robots.txt` accesible

### 3. Structured Data
Verificar en: https://search.google.com/test/rich-results
- [ ] Schema.org markup válido

---

## 🔄 Supabase Edge Functions (10 min)

### 1. Verificar función está desplegada
```bash
supabase functions list
```
- [ ] `server` aparece en la lista

### 2. Probar endpoint
```bash
# Health check
curl https://TU-PROJECT.supabase.co/functions/v1/make-server-946c286b/health
```
Debería responder: `{"status":"ok"}`

### 3. Probar envío de email
- [ ] Enviar formulario desde la web
- [ ] Verificar logs en Supabase Dashboard
- [ ] Confirmar recepción de email

---

## 📧 Configuración de Email (5 min)

### 1. Resend Dashboard
Ve a: https://resend.com/emails

- [ ] Domain verificado (✓)
- [ ] DNS records configurados
- [ ] API key activa

### 2. Enviar email de prueba
```bash
# Desde Resend dashboard o la web
```
- [ ] Email llega a `gestion@desokupacionleal.es`
- [ ] No va a spam
- [ ] Formato es correcto

---

## 🌐 Dominio Personalizado (si aplica)

### 1. Configurar en Fly.io
```bash
fly certs add desokupacionleal.es
fly certs add www.desokupacionleal.es
```

### 2. Configurar DNS
En tu proveedor de DNS:
```
Tipo: A
Nombre: @
Valor: [IP de Fly.io]

Tipo: AAAA
Nombre: @
Valor: [IPv6 de Fly.io]

Tipo: CNAME
Nombre: www
Valor: desokupacionleal.es
```

### 3. Verificar
```bash
fly certs show desokupacionleal.es
```
- [ ] Estado: `Ready`
- [ ] SSL certificado emitido

---

## 📱 Social Media (5 min)

### 1. Probar en compartir
- [ ] Facebook: título e imagen correctos
- [ ] Twitter: card se muestra bien
- [ ] LinkedIn: preview correcto
- [ ] WhatsApp: preview funciona

### 2. Open Graph Debugger
Facebook: https://developers.facebook.com/tools/debug/
Twitter: https://cards-dev.twitter.com/validator

---

## 🔔 Monitoreo Continuo

### 1. Configurar alertas (opcional)
- [ ] Sentry para error tracking
- [ ] UptimeRobot para monitoring
- [ ] Google Analytics

### 2. Comandos útiles
```bash
# Ver logs en tiempo real
fly logs

# Ver métricas
fly dashboard

# Ver estado
fly status
```

---

## 📝 Documentación

### 1. Actualizar URLs
Actualiza estos documentos con tu URL real:
- [ ] README.md
- [ ] DEPLOY.md
- [ ] package.json (homepage)

### 2. Screenshots
- [ ] Tomar screenshots para documentación
- [ ] Agregar a README si es necesario

---

## 🎉 ¡Listo para Producción!

Si todos los checks pasaron, tu aplicación está lista para recibir tráfico real.

### Próximos pasos recomendados:
1. Compartir URL con el equipo
2. Configurar Google Analytics
3. Configurar monitoreo de uptime
4. Preparar estrategia de marketing
5. Entrenar al equipo en el uso del sistema

---

## 🆘 Si algo falló

### Logs
```bash
fly logs
```

### Status
```bash
fly status
fly checks list
```

### Secrets
```bash
fly secrets list
```

### Restart
```bash
fly restart
```

### Redeploy
```bash
fly deploy --force
```

---

## 📞 Soporte

- **Fly.io**: https://fly.io/docs/
- **Supabase**: https://supabase.com/docs
- **Resend**: https://resend.com/docs

---

**Última actualización**: Enero 2025
