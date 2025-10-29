# 🤖 Deploy Automático desde GitHub a Fly.io

Esta guía explica cómo configurar el despliegue automático desde GitHub a Fly.io.

## 🎯 Beneficios

- ✅ Deploy automático en cada push a `main`
- ✅ Sin intervención manual
- ✅ Historial de deployments en GitHub
- ✅ Rollback fácil
- ✅ CI/CD integrado

---

## 📋 Prerrequisitos

Antes de empezar, asegúrate de tener:

- [x] Cuenta en GitHub
- [x] Cuenta en Fly.io
- [x] Fly CLI instalado
- [x] Git configurado localmente

---

## 🚀 Paso a Paso

### 1️⃣ Crear Repositorio en GitHub

```bash
# Opción A: Desde GitHub web
1. Ve a https://github.com/new
2. Nombre: desokupa-web
3. Descripción: Web de DESOKUPACIÓN LEAL
4. Privado/Público según prefieras
5. NO inicializar con README, .gitignore, o license
6. Click "Create repository"

# Opción B: Desde GitHub CLI
gh repo create desokupa-web --private --source=. --remote=origin
```

### 2️⃣ Subir el Código a GitHub

```bash
# Si no has inicializado git
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit - DESOKUPA web"

# Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/desokupa-web.git

# Push
git push -u origin main
```

### 3️⃣ Configurar Fly.io

```bash
# Login
fly auth login

# Crear app (sin deploy)
fly launch --no-deploy

# Configurar secrets
fly secrets set SUPABASE_URL="https://xxxxx.supabase.co"
fly secrets set SUPABASE_ANON_KEY="eyJhbGc..."
fly secrets set SUPABASE_SERVICE_ROLE_KEY="eyJhbGc..."
fly secrets set SUPABASE_DB_URL="postgresql://..."
fly secrets set RESEND_API_KEY="re_xxx..."
```

### 4️⃣ Obtener FLY_API_TOKEN

```bash
# Generar token
fly auth token
```

**Copia el token** que se muestra. Lo necesitarás en el siguiente paso.

### 5️⃣ Configurar GitHub Secret

**Opción A: Desde la web**
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (arriba a la derecha)
3. En el menú lateral: **Secrets and variables** → **Actions**
4. Click en **New repository secret**
5. Nombre: `FLY_API_TOKEN`
6. Value: (pega el token del paso anterior)
7. Click **Add secret**

**Opción B: Desde GitHub CLI**
```bash
gh secret set FLY_API_TOKEN
# Pega el token cuando te lo pida
```

### 6️⃣ Verificar el Workflow

El archivo `.github/workflows/deploy.yml` ya está configurado y contiene:

```yaml
name: Deploy to Fly.io

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

jobs:
  deploy:
    # ... configuración del deploy
```

### 7️⃣ ¡Primer Deploy Automático!

```bash
# Hacer cualquier cambio
echo "# DESOKUPA" > test.md

# Commit y push
git add .
git commit -m "Test automatic deploy"
git push origin main
```

---

## 📊 Monitorear el Deploy

### Desde GitHub

1. Ve a tu repositorio
2. Click en la pestaña **Actions**
3. Verás el workflow "Deploy to Fly.io" ejecutándose
4. Click en el workflow para ver los detalles

### Desde Fly.io

```bash
# Ver logs en tiempo real
fly logs

# Ver estado
fly status
```

---

## 🔄 Workflow Explicado

```yaml
on:
  push:
    branches:
      - main      # Deploy en cada push a main
      - master    # o master
  workflow_dispatch:  # Deploy manual desde GitHub UI
```

### Pasos del Workflow

1. **Checkout**: Descarga el código
2. **Setup Node**: Instala Node.js 20
3. **Install**: `npm ci` para instalar dependencias
4. **Build**: `npm run build` para compilar
5. **Setup Flyctl**: Instala Fly CLI
6. **Deploy**: Despliega a Fly.io

---

## ✅ Verificación

### Deploy Exitoso

Si todo funcionó, verás:
- ✅ Checkmark verde en GitHub Actions
- ✅ Tu app actualizada en Fly.io
- ✅ Logs sin errores

### Deploy Fallido

Si algo falló:
1. Ve a GitHub Actions
2. Click en el workflow fallido
3. Revisa los logs para ver el error
4. Corrige el error y push de nuevo

---

## 🎛️ Configuración Avanzada

### Deploy solo en Tags

```yaml
on:
  push:
    tags:
      - 'v*'  # Deploy solo cuando crees un tag v1.0.0, etc
```

### Deploy con Aprobación Manual

```yaml
jobs:
  deploy:
    environment:
      name: production
      url: https://desokupa-web.fly.dev
    # ... resto del job
```

Luego en GitHub:
1. Settings → Environments
2. Crear "production"
3. Agregar "Required reviewers"

### Notificaciones de Deploy

Agregar al workflow:

```yaml
- name: Notify on success
  if: success()
  run: |
    echo "🎉 Deploy exitoso!"
    # Aquí puedes agregar webhook a Slack, Discord, etc
```

---

## 🔒 Seguridad

### Secrets Disponibles

En tus workflows puedes usar:
- `${{ secrets.FLY_API_TOKEN }}` - Token de Fly.io
- Agregar más secrets según necesites

### Nunca hagas commit de:
- ❌ `.env` files
- ❌ API keys
- ❌ Passwords
- ❌ Tokens

Todo debe estar en:
- ✅ GitHub Secrets (para workflows)
- ✅ Fly.io Secrets (para la app)

---

## 📝 Comandos Útiles

```bash
# Ver workflows disponibles
gh workflow list

# Ver runs recientes
gh run list

# Ver detalles de un run
gh run view

# Re-ejecutar un workflow
gh run rerun

# Ver logs de un run
gh run view --log
```

---

## 🐛 Troubleshooting

### Error: "Invalid FLY_API_TOKEN"
- Verifica que el token esté configurado correctamente
- Genera un nuevo token: `fly auth token`
- Actualiza el secret en GitHub

### Error: "App not found"
- Asegúrate de haber ejecutado `fly launch`
- Verifica el nombre en `fly.toml`

### Build falla
- Verifica que `npm run build` funcione localmente
- Revisa los logs del workflow
- Asegúrate de que todas las dependencias estén en `package.json`

### Deploy es muy lento
- Normal, el primer deploy puede tomar 3-5 minutos
- Deploys subsecuentes son más rápidos (~2 minutos)

---

## 🎓 Tips y Best Practices

### 1. Branches de Desarrollo

Usa branches para desarrollo:
```bash
git checkout -b feature/nueva-funcionalidad
# ... hacer cambios ...
git push origin feature/nueva-funcionalidad
```

Crea un Pull Request en GitHub para revisar antes de merge a `main`.

### 2. Tags para Releases

```bash
git tag -a v1.0.0 -m "Primera versión en producción"
git push origin v1.0.0
```

### 3. Environments

Crea environments separados:
- `development` - Auto-deploy desde `develop` branch
- `staging` - Auto-deploy desde `staging` branch  
- `production` - Deploy desde `main` con aprobación

### 4. Rollback Rápido

Si un deploy rompe algo:
```bash
# Ver deploys anteriores
fly releases

# Rollback a versión anterior
fly releases rollback v123
```

O desde GitHub:
1. Ve al commit anterior
2. Crea nuevo branch desde ahí
3. Push para trigger nuevo deploy

---

## 📚 Recursos Adicionales

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Fly.io Docs](https://fly.io/docs/)
- [Fly.io GitHub Actions](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/)

---

## 🎉 ¡Felicidades!

Ahora tienes un pipeline de CI/CD completamente automatizado. Cada cambio que hagas y pushees a `main` se desplegará automáticamente.

### Próximos pasos:

1. ✅ Hacer cambios en el código
2. ✅ Commit y push
3. ✅ Ver el deploy automático en GitHub Actions
4. ✅ Verificar en producción

---

**¿Preguntas?** Revisa [DEPLOY.md](./DEPLOY.md) para más detalles.
