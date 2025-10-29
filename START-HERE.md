# 🎯 START HERE - DESOKUPA Web

Bienvenido al proyecto web de DESOKUPACIÓN LEAL. Esta guía te ayudará a empezar.

---

## 🚀 ¿Qué quieres hacer?

### 👨‍💻 Soy desarrollador, quiero ver el proyecto localmente
```bash
npm ci
npm run dev
```
Abre http://localhost:3000

📖 Lee: [README.md](./README.md#instalación-local)

---

### ☁️ Quiero desplegar a producción RÁPIDO (10 min)
```bash
chmod +x scripts/first-deploy.sh
./scripts/first-deploy.sh
```
📖 Lee: [QUICKSTART.md](./QUICKSTART.md)

---

### 🤖 Quiero configurar deploy automático desde GitHub
1. Sube el código a GitHub
2. Configura Fly.io
3. Agrega `FLY_API_TOKEN` a GitHub Secrets
4. ¡Listo! Cada push despliega automáticamente

📖 Lee: [GITHUB-DEPLOY.md](./GITHUB-DEPLOY.md)

---

### 📚 Quiero entender todo el proyecto
Lee en este orden:
1. [SETUP-SUMMARY.md](./SETUP-SUMMARY.md) - Resumen ejecutivo
2. [README.md](./README.md) - Overview del proyecto
3. [OPTIMIZATIONS.md](./OPTIMIZATIONS.md) - Cómo está optimizado

---

### 🔧 Necesito referencia de comandos
📖 Lee: [COMMANDS.md](./COMMANDS.md)

---

### ✅ Ya desplegué, ¿qué verifico?
📖 Lee: [POST-DEPLOY.md](./POST-DEPLOY.md)

---

## 📁 Estructura de Documentación

```
📚 Documentación/
├── START-HERE.md ⭐ (estás aquí)
│
├── 🎯 Para empezar:
│   ├── SETUP-SUMMARY.md       # Resumen ejecutivo
│   ├── QUICKSTART.md          # Guía rápida (10 min)
│   └── README.md              # Overview completo
│
├── 🚢 Para desplegar:
│   ├── GITHUB-DEPLOY.md       # Deploy automático (recomendado)
│   └── DEPLOY.md              # Deploy manual
│
├── ✅ Post-despliegue:
│   └── POST-DEPLOY.md         # Checklist de verificación
│
├── ⚡ Optimización:
│   └── OPTIMIZATIONS.md       # Performance y best practices
│
└── 🔧 Referencia:
    └── COMMANDS.md            # Todos los comandos útiles
```

---

## 🎓 Niveles de Usuario

### Nivel 1: Usuario Básico
Solo quieres que funcione:
1. Lee [QUICKSTART.md](./QUICKSTART.md)
2. Ejecuta `./scripts/first-deploy.sh`
3. Sigue las instrucciones
4. ¡Listo!

### Nivel 2: Desarrollador
Quieres entender y modificar:
1. Lee [README.md](./README.md)
2. Revisa la estructura del proyecto
3. Lee [OPTIMIZATIONS.md](./OPTIMIZATIONS.md)
4. Configura deploy automático: [GITHUB-DEPLOY.md](./GITHUB-DEPLOY.md)

### Nivel 3: DevOps/Admin
Quieres control total:
1. Lee toda la documentación
2. Entiende el flujo CI/CD
3. Personaliza workflows
4. Configura monitoring avanzado

---

## ⚡ Quick Commands

```bash
# Ver el proyecto localmente
npm run dev

# Deploy manual a producción
fly deploy

# Ver logs de producción
fly logs

# Ver estado de la app
fly status

# Abrir en navegador
fly open
```

---

## 🎯 Checklist Inicial

- [ ] Node.js 20+ instalado
- [ ] Git instalado
- [ ] Cuenta en Fly.io creada
- [ ] Cuenta en Supabase creada
- [ ] Cuenta en Resend creada
- [ ] Fly CLI instalado
- [ ] Repositorio en GitHub creado (opcional)

---

## 📞 ¿Necesitas Ayuda?

### Documentación Oficial
- **Fly.io**: https://fly.io/docs/
- **Supabase**: https://supabase.com/docs
- **Resend**: https://resend.com/docs
- **React**: https://react.dev/

### Archivos del Proyecto
- **Componentes**: `/components/`
- **Estilos**: `/styles/globals.css`
- **Config**: `/fly.toml`, `/vite.config.ts`
- **Scripts**: `/scripts/`

---

## 🔍 FAQs Rápidas

### ¿Cuánto cuesta?
Todo tiene tier gratuito:
- Fly.io: Gratuito hasta 3 VMs shared
- Supabase: 500MB DB gratis
- Resend: 100 emails/día gratis
- GitHub: Gratuito para repos públicos y privados

### ¿Cuánto tarda el primer deploy?
- Setup: 5 minutos
- Primer deploy: 3-5 minutos
- Deploys siguientes: ~2 minutos

### ¿Es automático el deploy?
Sí, si configuras GitHub Actions. Cada push a `main` despliega automáticamente.

### ¿Puedo hacer rollback?
Sí: `fly releases rollback vXXX`

### ¿Dónde veo los logs?
`fly logs` o en el dashboard de Fly.io

### ¿Necesito Docker?
No, Fly.io lo maneja automáticamente.

---

## 🎉 ¡Listo para Empezar!

### Opción A: Rápido y Fácil
```bash
./scripts/first-deploy.sh
```

### Opción B: Paso a Paso
1. Lee [QUICKSTART.md](./QUICKSTART.md)
2. Sigue las instrucciones
3. Despliega

### Opción C: Manual Completo
1. Lee [DEPLOY.md](./DEPLOY.md)
2. Ejecuta comandos manualmente
3. Personaliza según necesites

---

## 📊 Arquitectura del Proyecto

```
Frontend (React + Vite)
    ↓
Fly.io (Hosting)
    ↓
Supabase Edge Functions (API)
    ↓
Supabase (Database)
    +
Resend (Email)
```

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS v4
- **UI**: Shadcn/ui + Lucide Icons
- **Backend**: Supabase Edge Functions (Deno + Hono)
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Hosting**: Fly.io
- **CI/CD**: GitHub Actions

---

## 📈 Próximos Pasos Después del Deploy

1. ✅ Verificar que todo funciona: [POST-DEPLOY.md](./POST-DEPLOY.md)
2. 🎨 Personalizar colores y contenido
3. 📊 Configurar Google Analytics
4. 🔔 Setup monitoring (Sentry, UptimeRobot)
5. 🌐 Configurar dominio personalizado
6. 📱 Promocionar en redes sociales

---

## 💡 Tips Finales

1. **Empieza simple**: Usa el script automático
2. **Lee los logs**: Siempre revisa `fly logs`
3. **Haz backups**: Git es tu amigo
4. **Prueba localmente**: `npm run dev` antes de deploy
5. **Monitorea**: Mantén un ojo en el performance

---

## 🎊 ¡Éxito!

Una vez desplegado, tendrás:
- ✅ Web profesional en producción
- ✅ HTTPS automático
- ✅ Deploy automático desde GitHub
- ✅ Sistema de reservas funcional
- ✅ Generación de PDFs
- ✅ Performance optimizado (Score 95+)
- ✅ SEO completo
- ✅ Responsive design

---

**¿Listo para empezar?** → [QUICKSTART.md](./QUICKSTART.md)

**¿Preguntas?** → Lee la documentación o consulta [COMMANDS.md](./COMMANDS.md) para referencia.

---

Creado con ❤️ para DESOKUPACIÓN LEAL
