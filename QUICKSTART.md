# 🚀 Quick Start - DESOKUPA Web

Guía rápida para poner la web en producción en menos de 10 minutos.

## ✅ Checklist Pre-Deploy

Antes de empezar, asegúrate de tener:

- [ ] Cuenta en [GitHub](https://github.com)
- [ ] Cuenta en [Fly.io](https://fly.io)
- [ ] Cuenta en [Supabase](https://supabase.com)
- [ ] Cuenta en [Resend](https://resend.com)
- [ ] Fly CLI instalado
- [ ] Git instalado

---

## 📦 Paso 1: Configurar Servicios Externos (5 min)

### 1.1 Supabase

1. Crea un proyecto en https://supabase.com
2. Ve a **Settings** → **API**
3. Copia:
   - `Project URL` → `SUPABASE_URL`
   - `anon public` → `SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY`

4. Ve a **Settings** → **Database**
5. Copia:
   - `Connection string` → `SUPABASE_DB_URL`

### 1.2 Resend

1. Crea cuenta en https://resend.com
2. Verifica tu dominio `desokupacionleal.es`
3. Ve a **API Keys**
4. Crea una key y cópiala → `RESEND_API_KEY`

---

## 🚀 Paso 2: Subir a GitHub (2 min)

```bash
# 1. Inicializar repositorio
git init
git add .
git commit -m "Initial commit - DESOKUPA"

# 2. Crear repo en GitHub y conectar
git remote add origin https://github.com/TU-USUARIO/desokupa-web.git
git push -u origin main
```

---

## ☁️ Paso 3: Configurar Fly.io (3 min)

```bash
# 1. Instalar Fly CLI (si no lo tienes)
brew install flyctl  # macOS
# o
curl -L https://fly.io/install.sh | sh  # Linux/WSL

# 2. Login
fly auth login

# 3. Crear app (sin deploy todavía)
fly launch --no-deploy

# 4. Configurar secrets
fly secrets set SUPABASE_URL="https://xxxxx.supabase.co"
fly secrets set SUPABASE_ANON_KEY="eyJhbGc..."
fly secrets set SUPABASE_SERVICE_ROLE_KEY="eyJhbGc..."
fly secrets set SUPABASE_DB_URL="postgresql://..."
fly secrets set RESEND_API_KEY="re_xxx..."

# 5. Obtener token para GitHub
fly auth token
```

---

## 🔐 Paso 4: Configurar GitHub Actions (1 min)

1. Ve a tu repo en GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret**
4. Nombre: `FLY_API_TOKEN`
5. Valor: (pega el token del paso anterior)
6. **Add secret**

---

## 🎉 Paso 5: Desplegar (1 min)

```bash
# Hacer cualquier cambio y push
git add .
git commit -m "Deploy to production"
git push origin main
```

¡Eso es todo! GitHub Actions se encargará del resto.

---

## 📊 Verificar Despliegue

```bash
# Ver logs en tiempo real
fly logs

# Ver estado de la app
fly status

# Abrir en el navegador
fly open
```

---

## 🌐 Desplegar Supabase Edge Functions

```bash
# 1. Instalar Supabase CLI
npm install -g supabase

# 2. Login
supabase login

# 3. Link proyecto
supabase link --project-ref TU-PROJECT-REF

# 4. Deploy
supabase functions deploy server
```

---

## 🎯 URLs Importantes

Una vez desplegado, tendrás:

- **Web**: `https://desokupa-web.fly.dev` (o tu dominio personalizado)
- **API**: `https://TU-PROJECT.supabase.co/functions/v1/make-server-946c286b/`

---

## 🔄 Workflow de Desarrollo

```bash
# 1. Hacer cambios en tu código
# ... editar archivos ...

# 2. Commit y push
git add .
git commit -m "Descripción del cambio"
git push origin main

# 3. ¡Listo! Se despliega automáticamente
```

---

## 📞 Testing Rápido

Una vez desplegado, prueba:

1. ✅ Cargar la web: `fly open`
2. ✅ Sistema de reservas: Llena el formulario
3. ✅ Email: Verifica que llegue a `gestion@desokupacionleal.es`
4. ✅ PDFs: Descarga la Guía Legal y el Checklist
5. ✅ Responsive: Prueba en móvil y desktop

---

## 🆘 Problemas Comunes

### No se despliega automáticamente
- Verifica el token en GitHub Secrets
- Ve a **Actions** en GitHub para ver errores

### Error de email
- Verifica que el dominio esté verificado en Resend
- Comprueba `RESEND_API_KEY` en `fly secrets list`

### Error 500
- Ve los logs: `fly logs`
- Verifica todas las secrets: `fly secrets list`

---

## 🎊 ¡Listo!

Tu web ya está en producción con:
- ✅ Deploy automático desde GitHub
- ✅ SSL/HTTPS automático
- ✅ Sistema de reservas funcional
- ✅ Generación de PDFs
- ✅ SEO optimizado
- ✅ Performance optimizado

---

## 📚 Más Información

- Guía completa: [DEPLOY.md](./DEPLOY.md)
- Optimizaciones: [OPTIMIZATIONS.md](./OPTIMIZATIONS.md)
- README: [README.md](./README.md)
