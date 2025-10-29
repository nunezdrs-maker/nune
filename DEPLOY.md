# Guía de Despliegue en Fly.io

Esta guía te ayudará a desplegar la aplicación DESOKUPA en Fly.io desde GitHub con despliegue automático.

## 📋 Tabla de Contenidos

1. [Despliegue Automático desde GitHub (Recomendado)](#despliegue-automático-desde-github)
2. [Despliegue Manual](#despliegue-manual)
3. [Configuración de Dominio](#configurar-dominio-personalizado)
4. [Supabase Edge Functions](#desplegar-las-supabase-edge-functions)
5. [Troubleshooting](#troubleshooting)

---

## 🚀 Despliegue Automático desde GitHub

Esta es la forma recomendada. Cada vez que hagas push a la rama `main` o `master`, la aplicación se desplegará automáticamente.

### 1. Subir el código a GitHub

```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit - DESOKUPA web"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/desokupa-web.git

# Push a GitHub
git push -u origin main
```

### 2. Configurar Fly.io

```bash
# Instalar Fly CLI
brew install flyctl  # macOS
# o
curl -L https://fly.io/install.sh | sh  # Linux

# Login a Fly.io
fly auth login

# Crear la aplicación (solo la primera vez)
fly launch --no-deploy

# Configurar secrets
fly secrets set SUPABASE_URL="https://tu-proyecto.supabase.co"
fly secrets set SUPABASE_ANON_KEY="tu-anon-key"
fly secrets set SUPABASE_SERVICE_ROLE_KEY="tu-service-role-key"
fly secrets set SUPABASE_DB_URL="postgresql://..."
fly secrets set RESEND_API_KEY="tu-resend-api-key"
```

### 3. Obtener el FLY_API_TOKEN

```bash
# Obtener tu token de Fly.io
fly auth token
```

### 4. Configurar GitHub Secret

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Secrets and variables** → **Actions**
3. Click en **New repository secret**
4. Nombre: `FLY_API_TOKEN`
5. Valor: (pega el token que obtuviste en el paso 3)
6. Click en **Add secret**

### 5. ¡Listo! Deploy Automático

Ahora cada vez que hagas push a GitHub:

```bash
git add .
git commit -m "Mi cambio"
git push origin main
```

La aplicación se desplegará automáticamente en Fly.io. Puedes ver el progreso en:
- GitHub: pestaña **Actions**
- Fly.io: `fly logs`

### 6. Ver tu aplicación

```bash
# Abrir en el navegador
fly open

# Ver logs en tiempo real
fly logs

# Ver estado
fly status
```

---

## 🛠️ Despliegue Manual

Si prefieres desplegar manualmente:

## Prerrequisitos

1. **Instalar Fly CLI**
   ```bash
   # En macOS
   brew install flyctl
   
   # En Linux
   curl -L https://fly.io/install.sh | sh
   
   # En Windows
   powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```

2. **Crear cuenta en Fly.io**
   ```bash
   fly auth signup
   # o si ya tienes cuenta:
   fly auth login
   ```

## Pasos para Desplegar

### 1. Configurar las variables de entorno en Fly.io

Primero, necesitas configurar las variables de entorno de Supabase:

```bash
fly secrets set SUPABASE_URL="tu-proyecto.supabase.co"
fly secrets set SUPABASE_ANON_KEY="tu-anon-key"
fly secrets set RESEND_API_KEY="tu-resend-api-key"
```

### 2. Crear la aplicación en Fly.io

```bash
fly launch
```

Este comando te preguntará:
- **App Name**: Puedes usar `desokupa-web` o el nombre que prefieras
- **Region**: Selecciona `mad` (Madrid) para España o la región más cercana
- **¿Desplegar ahora?**: Responde **NO** por ahora

### 3. Editar fly.toml (opcional)

El archivo `fly.toml` ya está configurado, pero puedes personalizarlo:

```toml
app = 'tu-nombre-de-app'  # Cambia esto por el nombre de tu app
primary_region = 'mad'     # Madrid, España
```

### 4. Desplegar la aplicación

```bash
fly deploy
```

Esto hará:
- Construir la imagen Docker
- Subir la imagen a Fly.io
- Desplegar la aplicación
- Configurar SSL automáticamente

### 5. Verificar el despliegue

```bash
fly status
fly logs
```

### 6. Abrir la aplicación

```bash
fly open
```

## Desplegar las Supabase Edge Functions

Las Edge Functions deben desplegarse por separado en Supabase:

```bash
# Instalar Supabase CLI
npm install -g supabase

# Login a Supabase
supabase login

# Link al proyecto
supabase link --project-ref tu-project-ref

# Desplegar functions
supabase functions deploy server
```

## Comandos Útiles

```bash
# Ver logs en tiempo real
fly logs

# Escalar la aplicación
fly scale count 2

# Ver estado de la app
fly status

# Abrir dashboard
fly dashboard

# Ver dominios configurados
fly certs list

# Agregar dominio personalizado
fly certs add tudominio.com
```

## Configurar Dominio Personalizado

1. Agregar el dominio en Fly.io:
   ```bash
   fly certs add www.desokupacionleal.es
   fly certs add desokupacionleal.es
   ```

2. Configurar DNS en tu proveedor:
   - Tipo: `A`
   - Nombre: `@`
   - Valor: (IP que te da Fly.io)
   
   - Tipo: `AAAA`
   - Nombre: `@`
   - Valor: (IPv6 que te da Fly.io)

3. Verificar:
   ```bash
   fly certs show desokupacionleal.es
   ```

## Actualizar la Aplicación

Cada vez que hagas cambios:

```bash
fly deploy
```

## Monitoreo y Logs

```bash
# Ver logs
fly logs

# Ver métricas
fly dashboard

# Ver estado de salud
fly status
```

## Troubleshooting

### Error: No se puede conectar a Supabase
- Verifica que las variables de entorno estén configuradas:
  ```bash
  fly secrets list
  ```

### Error en el build
- Revisa los logs:
  ```bash
  fly logs
  ```

### La app no responde
- Verifica el estado:
  ```bash
  fly status
  fly checks list
  ```

## Costos

Fly.io ofrece un tier gratuito que incluye:
- 3 máquinas compartidas con 256MB RAM
- 160GB de tráfico outbound mensual
- SSL gratuito

Para esta aplicación, el tier gratuito debería ser suficiente para empezar.

## Soporte

- Documentación: https://fly.io/docs/
- Community: https://community.fly.io/
- Status: https://status.flyio.net/
