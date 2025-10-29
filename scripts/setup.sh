#!/bin/bash

# DESOKUPA - Script de Configuración Rápida
# Este script te guía en la configuración inicial

echo "🚀 DESOKUPA - Configuración Inicial"
echo "===================================="
echo ""

# Check if flyctl is installed
if ! command -v fly &> /dev/null; then
    echo "❌ Fly CLI no está instalado"
    echo "📦 Instalando Fly CLI..."
    curl -L https://fly.io/install.sh | sh
    echo "✅ Fly CLI instalado"
    echo ""
fi

# Check if user is logged in to Fly.io
echo "🔐 Verificando login en Fly.io..."
if ! fly auth whoami &> /dev/null; then
    echo "Por favor inicia sesión en Fly.io:"
    fly auth login
fi
echo "✅ Autenticado en Fly.io"
echo ""

# Launch app
echo "🚀 Creando aplicación en Fly.io..."
echo "IMPORTANTE: Cuando te pregunte '¿Desplegar ahora?', responde NO"
echo ""
fly launch --no-deploy

echo ""
echo "📝 Ahora vamos a configurar los secrets..."
echo ""

# Configurar Supabase URL
read -p "SUPABASE_URL (https://xxxxx.supabase.co): " supabase_url
fly secrets set SUPABASE_URL="$supabase_url"

# Configurar Supabase Anon Key
read -p "SUPABASE_ANON_KEY: " supabase_anon_key
fly secrets set SUPABASE_ANON_KEY="$supabase_anon_key"

# Configurar Supabase Service Role Key
read -p "SUPABASE_SERVICE_ROLE_KEY: " supabase_service_role_key
fly secrets set SUPABASE_SERVICE_ROLE_KEY="$supabase_service_role_key"

# Configurar Supabase DB URL
read -p "SUPABASE_DB_URL: " supabase_db_url
fly secrets set SUPABASE_DB_URL="$supabase_db_url"

# Configurar Resend API Key
read -p "RESEND_API_KEY: " resend_api_key
fly secrets set RESEND_API_KEY="$resend_api_key"

echo ""
echo "✅ Secrets configurados correctamente"
echo ""

# Obtener FLY_API_TOKEN
echo "📋 Tu FLY_API_TOKEN para GitHub Actions:"
echo "========================================"
fly auth token
echo "========================================"
echo ""
echo "⚠️  IMPORTANTE: Copia este token y agrégalo a GitHub:"
echo "1. Ve a tu repositorio en GitHub"
echo "2. Settings → Secrets and variables → Actions"
echo "3. New repository secret"
echo "4. Nombre: FLY_API_TOKEN"
echo "5. Valor: (pega el token de arriba)"
echo ""

read -p "¿Ya configuraste el token en GitHub? (y/n): " github_configured

if [ "$github_configured" = "y" ]; then
    echo ""
    echo "🎉 ¡Configuración completada!"
    echo ""
    echo "📚 Próximos pasos:"
    echo "1. Haz push a tu repositorio de GitHub"
    echo "2. El despliegue se hará automáticamente"
    echo "3. Monitorea el progreso en GitHub Actions"
    echo ""
    echo "📊 Comandos útiles:"
    echo "  fly status    - Ver estado de la app"
    echo "  fly logs      - Ver logs en tiempo real"
    echo "  fly open      - Abrir en el navegador"
    echo ""
else
    echo ""
    echo "⚠️  No olvides configurar el FLY_API_TOKEN en GitHub"
    echo "Sin esto, el despliegue automático no funcionará"
    echo ""
fi
