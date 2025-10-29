#!/bin/bash

# Script para el primer despliegue de DESOKUPA
# Asegura que todo esté configurado correctamente

set -e  # Exit on error

echo "🚀 DESOKUPA - Primer Despliegue"
echo "================================"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar errores
error() {
    echo -e "${RED}❌ Error: $1${NC}"
    exit 1
}

# Función para mostrar éxito
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar advertencia
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 1. Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    error "Este script debe ejecutarse desde la raíz del proyecto"
fi

# 2. Verificar Node.js
if ! command -v node &> /dev/null; then
    error "Node.js no está instalado. Instálalo desde https://nodejs.org/"
fi
success "Node.js encontrado: $(node --version)"

# 3. Verificar npm
if ! command -v npm &> /dev/null; then
    error "npm no está instalado"
fi
success "npm encontrado: $(npm --version)"

# 4. Verificar Git
if ! command -v git &> /dev/null; then
    error "Git no está instalado"
fi
success "Git encontrado: $(git --version)"

# 5. Verificar Fly CLI
if ! command -v fly &> /dev/null; then
    warning "Fly CLI no está instalado"
    read -p "¿Quieres instalarlo ahora? (y/n): " install_fly
    if [ "$install_fly" = "y" ]; then
        echo "Instalando Fly CLI..."
        curl -L https://fly.io/install.sh | sh
        success "Fly CLI instalado"
    else
        error "Fly CLI es necesario para el despliegue"
    fi
fi
success "Fly CLI encontrado"

echo ""
echo "================================"
echo "📦 Paso 1: Instalar dependencias"
echo "================================"
echo ""

npm ci || error "Error al instalar dependencias"
success "Dependencias instaladas"

echo ""
echo "================================"
echo "🔨 Paso 2: Build de prueba"
echo "================================"
echo ""

npm run build || error "Error en el build. Revisa los errores arriba."
success "Build exitoso"

echo ""
echo "================================"
echo "🔐 Paso 3: Login a Fly.io"
echo "================================"
echo ""

if ! fly auth whoami &> /dev/null; then
    echo "Abriendo navegador para login..."
    fly auth login || error "Error en el login de Fly.io"
fi
success "Autenticado en Fly.io como: $(fly auth whoami)"

echo ""
echo "================================"
echo "🚀 Paso 4: Crear aplicación"
echo "================================"
echo ""

warning "IMPORTANTE: Cuando te pregunte '¿Desplegar ahora?', responde NO"
echo ""
read -p "Presiona Enter para continuar..."

fly launch --no-deploy || error "Error al crear la aplicación"
success "Aplicación creada"

echo ""
echo "================================"
echo "🔑 Paso 5: Configurar Secrets"
echo "================================"
echo ""

echo "Ahora necesitamos configurar las variables de entorno secretas."
echo ""

# SUPABASE_URL
read -p "SUPABASE_URL (https://xxxxx.supabase.co): " supabase_url
if [ -z "$supabase_url" ]; then
    error "SUPABASE_URL es requerido"
fi
fly secrets set SUPABASE_URL="$supabase_url" || error "Error al configurar SUPABASE_URL"

# SUPABASE_ANON_KEY
read -p "SUPABASE_ANON_KEY: " supabase_anon_key
if [ -z "$supabase_anon_key" ]; then
    error "SUPABASE_ANON_KEY es requerido"
fi
fly secrets set SUPABASE_ANON_KEY="$supabase_anon_key" || error "Error al configurar SUPABASE_ANON_KEY"

# SUPABASE_SERVICE_ROLE_KEY
read -p "SUPABASE_SERVICE_ROLE_KEY: " supabase_service_role_key
if [ -z "$supabase_service_role_key" ]; then
    error "SUPABASE_SERVICE_ROLE_KEY es requerido"
fi
fly secrets set SUPABASE_SERVICE_ROLE_KEY="$supabase_service_role_key" || error "Error al configurar SUPABASE_SERVICE_ROLE_KEY"

# SUPABASE_DB_URL
read -p "SUPABASE_DB_URL: " supabase_db_url
if [ -z "$supabase_db_url" ]; then
    error "SUPABASE_DB_URL es requerido"
fi
fly secrets set SUPABASE_DB_URL="$supabase_db_url" || error "Error al configurar SUPABASE_DB_URL"

# RESEND_API_KEY
read -p "RESEND_API_KEY: " resend_api_key
if [ -z "$resend_api_key" ]; then
    error "RESEND_API_KEY es requerido"
fi
fly secrets set RESEND_API_KEY="$resend_api_key" || error "Error al configurar RESEND_API_KEY"

success "Todos los secrets configurados"

echo ""
echo "================================"
echo "🎯 Paso 6: Primer Deploy"
echo "================================"
echo ""

read -p "¿Desplegar ahora? (y/n): " deploy_now

if [ "$deploy_now" = "y" ]; then
    fly deploy || error "Error en el despliegue"
    success "¡Aplicación desplegada!"
    
    echo ""
    echo "================================"
    echo "🎉 ¡Despliegue Exitoso!"
    echo "================================"
    echo ""
    
    fly open
    
    echo ""
    echo "📋 Próximos pasos:"
    echo "1. Verifica que la aplicación funcione correctamente"
    echo "2. Prueba el formulario de reservas"
    echo "3. Verifica la descarga de PDFs"
    echo "4. Configura el deploy automático desde GitHub"
    echo ""
    echo "📚 Documentación:"
    echo "  - Guía completa: ./DEPLOY.md"
    echo "  - Post-deploy checklist: ./POST-DEPLOY.md"
    echo ""
    echo "🔧 Comandos útiles:"
    echo "  fly logs      - Ver logs"
    echo "  fly status    - Ver estado"
    echo "  fly open      - Abrir en navegador"
    echo ""
else
    echo ""
    echo "ℹ️  Para desplegar más tarde, ejecuta:"
    echo "  fly deploy"
    echo ""
fi

echo ""
echo "================================"
echo "📋 Token para GitHub Actions"
echo "================================"
echo ""
echo "Para configurar deploy automático desde GitHub:"
echo ""
echo "1. Copia este token:"
echo ""
fly auth token
echo ""
echo "2. Ve a tu repositorio en GitHub"
echo "3. Settings → Secrets and variables → Actions"
echo "4. New repository secret"
echo "5. Nombre: FLY_API_TOKEN"
echo "6. Valor: (pega el token de arriba)"
echo ""

read -p "Presiona Enter para finalizar..."

success "¡Configuración completada!"
