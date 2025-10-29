# 🛠️ Scripts de Setup - DESOKUPA

Scripts automatizados para facilitar la configuración y despliegue.

---

## 📜 Scripts Disponibles

### `first-deploy.sh` ⭐
Script completo para el primer despliegue. Incluye:
- ✅ Verificación de dependencias
- ✅ Build de prueba
- ✅ Login a Fly.io
- ✅ Creación de app
- ✅ Configuración de secrets
- ✅ Primer deploy
- ✅ Generación de FLY_API_TOKEN

**Uso:**
```bash
chmod +x scripts/first-deploy.sh
./scripts/first-deploy.sh
```

### `setup.sh`
Script más simple para configuración inicial:
- ✅ Instalación de Fly CLI
- ✅ Login a Fly.io
- ✅ Creación de app
- ✅ Configuración de secrets
- ✅ Generación de token para GitHub

**Uso:**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

---

## 🚀 Primer Uso

### Opción 1: Script Completo (Recomendado)
```bash
# Hacer ejecutable
chmod +x scripts/first-deploy.sh

# Ejecutar
./scripts/first-deploy.sh
```

Sigue las instrucciones en pantalla.

### Opción 2: Setup Básico
```bash
# Hacer ejecutable
chmod +x scripts/setup.sh

# Ejecutar
./scripts/setup.sh
```

---

## 📋 Lo que Necesitas Tener Listo

Antes de ejecutar los scripts, asegúrate de tener:

### Información Requerida
- `SUPABASE_URL` - URL de tu proyecto Supabase
- `SUPABASE_ANON_KEY` - Anon key de Supabase
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key de Supabase
- `SUPABASE_DB_URL` - Connection string de PostgreSQL
- `RESEND_API_KEY` - API key de Resend

### Software Requerido
- Node.js 20+
- npm
- Git
- Fly CLI (el script puede instalarlo)

---

## 🔍 Qué Hace Cada Script

### `first-deploy.sh`

1. **Verificación de Dependencias**
   - Node.js
   - npm
   - Git
   - Fly CLI

2. **Instalación y Build**
   - `npm ci`
   - `npm run build`

3. **Fly.io Setup**
   - Login
   - `fly launch --no-deploy`

4. **Configuración de Secrets**
   - Pregunta interactivamente por cada secret
   - Configura en Fly.io

5. **Deploy**
   - Opción de deploy inmediato
   - Abre la app en el navegador

6. **GitHub Token**
   - Genera `FLY_API_TOKEN`
   - Muestra instrucciones para GitHub

### `setup.sh`

Versión simplificada:
1. Verifica Fly CLI
2. Login a Fly.io
3. Crea app
4. Configura secrets
5. Genera token

---

## 🎯 Después de Ejecutar

### Si usaste `first-deploy.sh`:
1. ✅ App desplegada en Fly.io
2. ✅ Secrets configurados
3. ✅ Token generado para GitHub

**Próximo paso**: Configurar GitHub Actions
1. Ve a tu repo en GitHub
2. Settings → Secrets and variables → Actions
3. New repository secret
4. Nombre: `FLY_API_TOKEN`
5. Valor: (el token que te mostró el script)

### Si usaste `setup.sh`:
1. ✅ App creada en Fly.io
2. ✅ Secrets configurados
3. ✅ Token generado

**Próximos pasos**:
1. Configurar GitHub Actions (como arriba)
2. Hacer deploy: `fly deploy`

---

## 🐛 Troubleshooting

### Error: "Permission denied"
```bash
chmod +x scripts/*.sh
```

### Error: "Fly CLI not found"
El script debería instalarlo automáticamente. Si no:
```bash
# macOS
brew install flyctl

# Linux/WSL
curl -L https://fly.io/install.sh | sh
```

### Error: "Invalid credentials"
```bash
fly auth logout
fly auth login
```

### Script se detiene en medio
- Lee el mensaje de error
- Generalmente es por falta de una secret
- Vuelve a ejecutar, las secrets ya configuradas se mantienen

---

## 💡 Tips

1. **Tener todo listo**: Copia todas las keys antes de ejecutar
2. **Usar clipboard**: Copia las keys directamente (Cmd+C / Ctrl+C)
3. **No cerrar**: No cierres la terminal hasta que termine
4. **Guardar token**: Copia el `FLY_API_TOKEN` que se genera
5. **Logs**: Si algo falla, los logs te dirán dónde

---

## 🔄 Re-ejecutar

Los scripts son idempotentes. Puedes ejecutarlos múltiples veces:
- No crearán apps duplicadas
- Actualizarán secrets si cambias valores
- No harán deploy si ya existe

---

## 🛠️ Personalización

Puedes editar los scripts para:
- Agregar más validaciones
- Cambiar mensajes
- Agregar pasos adicionales
- Integrar con otros servicios

Los scripts están en Bash puro, fáciles de modificar.

---

## 📚 Más Información

- [QUICKSTART.md](../QUICKSTART.md) - Guía rápida completa
- [GITHUB-DEPLOY.md](../GITHUB-DEPLOY.md) - Setup de GitHub Actions
- [DEPLOY.md](../DEPLOY.md) - Deploy manual detallado
- [COMMANDS.md](../COMMANDS.md) - Referencia de comandos

---

**¿Problemas?** Abre un issue o revisa la documentación completa.
