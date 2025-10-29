# 📋 Resumen de Configuración - DESOKUPA

Este documento resume todo lo necesario para poner la web en producción.

---

## ⚡ TL;DR (Too Long; Didn't Read)

```bash
# 1. Clonar/Navegar al proyecto
cd desokupa-web

# 2. Ejecutar script automático
chmod +x scripts/first-deploy.sh
./scripts/first-deploy.sh

# 3. Configurar GitHub Secret (FLY_API_TOKEN)

# 4. Push a GitHub
git push origin main

# ¡Listo! 🎉
```

---

## 📦 Lo que Necesitas

### Cuentas y Servicios
- ✅ GitHub (gratuito)
- ✅ Fly.io (tier gratuito disponible)
- ✅ Supabase (tier gratuito disponible)
- ✅ Resend (tier gratuito: 100 emails/día)

### Instalaciones Locales
- ✅ Node.js 20+ ([descargar](https://nodejs.org))
- ✅ Git ([descargar](https://git-scm.com))
- ✅ Fly CLI ([instalar](https://fly.io/docs/hands-on/install-flyctl/))

### Información que Necesitas
- 🔑 SUPABASE_URL
- 🔑 SUPABASE_ANON_KEY
- 🔑 SUPABASE_SERVICE_ROLE_KEY
- 🔑 SUPABASE_DB_URL
- 🔑 RESEND_API_KEY

---

## 🎯 Proceso Simplificado

### Opción A: Automático (Recomendado)
```bash
./scripts/first-deploy.sh
```
El script te guía paso a paso.

### Opción B: Manual
Ver [DEPLOY.md](./DEPLOY.md) para pasos detallados.

---

## 🗂️ Estructura de Archivos Importantes

```
desokupa-web/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # ⭐ Deploy automático
│       └── pr-check.yml        # Verifica PRs
├── scripts/
│   ├── first-deploy.sh         # 🚀 Setup inicial
│   └── setup.sh                # Configuración
├── Dockerfile                  # 🐳 Imagen Docker
├── fly.toml                    # ⚙️  Config de Fly.io
├── .env.example                # 📝 Template de env vars
└── Documentación:
    ├── QUICKSTART.md           # ⚡ Inicio rápido
    ├── GITHUB-DEPLOY.md        # 🤖 GitHub + Fly.io
    ├── DEPLOY.md               # 📦 Deploy completo
    ├── POST-DEPLOY.md          # ✅ Verificación
    └── OPTIMIZATIONS.md        # ⚡ Performance
```

---

## 🔑 Obtener Credenciales

### Supabase
1. Ve a https://supabase.com/dashboard
2. Crea proyecto o selecciona existente
3. **Settings** → **API**:
   - Project URL → `SUPABASE_URL`
   - anon public → `SUPABASE_ANON_KEY`
   - service_role → `SUPABASE_SERVICE_ROLE_KEY`
4. **Settings** → **Database**:
   - Connection string → `SUPABASE_DB_URL`

### Resend
1. Ve a https://resend.com/domains
2. Verifica tu dominio
3. Ve a https://resend.com/api-keys
4. Create API Key → `RESEND_API_KEY`

### Fly.io
1. Login: `fly auth login`
2. Token: `fly auth token` → `FLY_API_TOKEN`

---

## 🚀 Comandos Esenciales

### Setup Inicial
```bash
npm ci                          # Instalar dependencias
npm run build                   # Build local
fly auth login                  # Login a Fly.io
fly launch --no-deploy          # Crear app
```

### Configurar Secrets
```bash
fly secrets set SUPABASE_URL="..."
fly secrets set SUPABASE_ANON_KEY="..."
fly secrets set SUPABASE_SERVICE_ROLE_KEY="..."
fly secrets set SUPABASE_DB_URL="..."
fly secrets set RESEND_API_KEY="..."
```

### Deploy
```bash
# Manual
fly deploy

# Automático (GitHub)
git push origin main
```

### Monitoring
```bash
fly logs                        # Ver logs
fly status                      # Ver estado
fly open                        # Abrir en navegador
fly dashboard                   # Dashboard web
```

---

## 📊 Flujo de Trabajo

```
┌─────────────┐
│  Developer  │
└──────┬──────┘
       │ git push
       ▼
┌─────────────┐
│   GitHub    │◄─── Push to main
└──────┬──────┘
       │ trigger
       ▼
┌─────────────┐
│   Actions   │◄─── Build + Test
└──────┬──────┘
       │ deploy
       ▼
┌─────────────┐
│   Fly.io    │◄─── Production
└─────────────┘
```

---

## ✅ Checklist de Setup

### Pre-Deploy
- [ ] Cuentas creadas (GitHub, Fly.io, Supabase, Resend)
- [ ] Fly CLI instalado
- [ ] Node.js y npm instalados
- [ ] Git configurado
- [ ] Repositorio creado en GitHub

### Configuración
- [ ] `fly launch` ejecutado
- [ ] Secrets configurados en Fly.io
- [ ] `FLY_API_TOKEN` en GitHub Secrets
- [ ] Dominio verificado en Resend
- [ ] Edge Functions desplegadas en Supabase

### Post-Deploy
- [ ] Web carga correctamente
- [ ] Formulario de reservas funciona
- [ ] Emails se envían correctamente
- [ ] PDFs se descargan
- [ ] Tests en móvil y desktop
- [ ] Performance score > 90 (PageSpeed)

---

## 🎓 Tips Rápidos

### Desarrollo Local
```bash
npm run dev                     # http://localhost:3000
```

### Ver cambios antes de deploy
```bash
npm run build                   # Build local
npm run preview                 # Preview del build
```

### Rollback si algo sale mal
```bash
fly releases                    # Ver versiones
fly releases rollback vXXX      # Volver a versión anterior
```

### Actualizar dependencias
```bash
npm update                      # Actualizar packages
npm run build                   # Verificar que funciona
git commit -am "Update deps"
git push                        # Deploy automático
```

---

## 🆘 Problemas Comunes

| Problema | Solución |
|----------|----------|
| Build falla | `npm run build` localmente para ver error |
| Deploy falla | Revisar logs con `fly logs` |
| Email no llega | Verificar dominio en Resend |
| 404 en producción | Verificar `fly.toml` internal_port |
| Variables no funcionan | `fly secrets list` para verificar |

---

## 📞 Contactos y Links

### Documentación
- **Fly.io**: https://fly.io/docs/
- **Supabase**: https://supabase.com/docs
- **Resend**: https://resend.com/docs
- **GitHub Actions**: https://docs.github.com/actions

### Dashboards
- **Fly.io**: https://fly.io/dashboard
- **Supabase**: https://supabase.com/dashboard
- **Resend**: https://resend.com/emails
- **GitHub**: https://github.com/TU-USUARIO/desokupa-web

---

## 🎉 Siguiente Nivel

Una vez que todo funcione:

### Performance
- [ ] Configurar CDN para assets
- [ ] Habilitar HTTP/2
- [ ] Implementar Service Worker (PWA)

### Monitoreo
- [ ] Configurar Sentry para error tracking
- [ ] Agregar Google Analytics
- [ ] Setup UptimeRobot

### Marketing
- [ ] Configurar Google Search Console
- [ ] Optimizar meta tags para redes sociales
- [ ] Crear content para blog/recursos

---

## 📝 Notas Finales

- El tier gratuito de Fly.io es suficiente para empezar
- Resend permite 100 emails/día gratis
- Supabase tiene 500MB de DB gratis
- El primer deploy puede tardar 3-5 minutos
- Deploys subsecuentes son más rápidos (~2 min)

---

**Última actualización**: Enero 2025

**¿Dudas?** Revisa:
- [QUICKSTART.md](./QUICKSTART.md) - Guía rápida
- [GITHUB-DEPLOY.md](./GITHUB-DEPLOY.md) - GitHub + Fly.io
- [DEPLOY.md](./DEPLOY.md) - Guía completa
