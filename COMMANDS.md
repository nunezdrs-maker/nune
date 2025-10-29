# 🔧 Comandos Útiles - DESOKUPA

Referencia rápida de todos los comandos útiles para desarrollo y despliegue.

---

## 📦 NPM / Desarrollo Local

```bash
# Instalar dependencias
npm install                     # Instalar todas las dependencias
npm ci                          # Instalar desde lock file (más rápido)

# Desarrollo
npm run dev                     # Servidor de desarrollo (localhost:3000)
npm run build                   # Build de producción
npm run preview                 # Preview del build
npm run lint                    # Verificar TypeScript
npm run clean                   # Limpiar cache y dist

# Actualizar dependencias
npm update                      # Actualizar todos los packages
npm outdated                    # Ver packages desactualizados
```

---

## 🐙 Git / GitHub

```bash
# Setup inicial
git init                        # Inicializar repositorio
git add .                       # Agregar todos los archivos
git commit -m "mensaje"         # Commit con mensaje
git remote add origin URL       # Conectar con GitHub
git push -u origin main         # Push inicial

# Desarrollo diario
git status                      # Ver estado
git add archivo.txt             # Agregar archivo específico
git add .                       # Agregar todos los cambios
git commit -m "mensaje"         # Commit
git push                        # Push a GitHub (trigger deploy)

# Branches
git checkout -b feature/nueva   # Crear nueva branch
git checkout main               # Cambiar a main
git merge feature/nueva         # Merge branch a main
git branch -d feature/nueva     # Eliminar branch

# Historial
git log                         # Ver commits
git log --oneline               # Ver commits resumidos
git diff                        # Ver cambios sin commit

# Deshacer cambios
git reset HEAD~1                # Deshacer último commit (mantener cambios)
git reset --hard HEAD~1         # Deshacer último commit (eliminar cambios)
git checkout -- archivo.txt     # Descartar cambios en archivo

# Tags para releases
git tag v1.0.0                  # Crear tag
git push origin v1.0.0          # Push tag
git tag -l                      # Listar tags
```

### GitHub CLI

```bash
# Instalación
brew install gh                 # macOS
# o descargar de https://cli.github.com/

# Setup
gh auth login                   # Login

# Repositorios
gh repo create nombre --private # Crear repo
gh repo view                    # Ver info del repo

# Pull Requests
gh pr list                      # Listar PRs
gh pr create                    # Crear PR
gh pr view 123                  # Ver PR #123
gh pr merge 123                 # Merge PR #123

# Issues
gh issue list                   # Listar issues
gh issue create                 # Crear issue

# Workflows
gh workflow list                # Listar workflows
gh run list                     # Ver runs recientes
gh run view                     # Ver último run
gh run view --log               # Ver logs del run
gh run rerun                    # Re-ejecutar workflow

# Secrets
gh secret set FLY_API_TOKEN     # Crear secret
gh secret list                  # Listar secrets
```

---

## ✈️ Fly.io

```bash
# Setup
fly auth login                  # Login a Fly.io
fly auth logout                 # Logout
fly auth whoami                 # Ver usuario actual
fly auth token                  # Obtener token para GitHub

# Apps
fly apps list                   # Listar tus apps
fly apps create nombre          # Crear app
fly apps destroy nombre         # Eliminar app

# Deploy
fly launch                      # Crear y desplegar app nueva
fly launch --no-deploy          # Crear sin desplegar
fly deploy                      # Desplegar cambios
fly deploy --remote-only        # Build en servidor Fly.io
fly deploy --local-only         # Build local

# Secrets (Variables de entorno)
fly secrets list                # Listar secrets
fly secrets set KEY=value       # Crear/actualizar secret
fly secrets set KEY1=v1 KEY2=v2 # Múltiples secrets
fly secrets unset KEY           # Eliminar secret
fly secrets import < .env       # Importar desde archivo

# Monitoring
fly status                      # Estado de la app
fly logs                        # Ver logs en tiempo real
fly logs --app nombre           # Logs de app específica
fly dashboard                   # Abrir dashboard web
fly open                        # Abrir app en navegador

# Releases y Versiones
fly releases                    # Ver historial de releases
fly releases rollback v123      # Rollback a versión específica

# Scaling
fly scale count 2               # Escalar a 2 instancias
fly scale count 1               # Volver a 1 instancia
fly scale memory 512            # Cambiar RAM a 512MB
fly scale vm shared-cpu-1x      # Cambiar tipo de VM

# Health Checks
fly checks list                 # Ver health checks
fly checks list --check http    # Ver health check específico

# SSH y Debugging
fly ssh console                 # SSH a la instancia
fly ssh console -C "comando"    # Ejecutar comando remoto

# Certificados SSL
fly certs list                  # Listar certificados
fly certs add dominio.com       # Agregar dominio
fly certs show dominio.com      # Ver info del certificado
fly certs remove dominio.com    # Remover dominio

# Regiones
fly regions list                # Ver todas las regiones
fly regions add mad             # Agregar región Madrid
fly regions remove mad          # Remover región

# Máquinas
fly machine list                # Listar máquinas
fly machine restart ID          # Reiniciar máquina
fly machine stop ID             # Detener máquina
fly machine start ID            # Iniciar máquina

# Info
fly info                        # Info de la app
fly config display              # Ver configuración (fly.toml)
fly platform regions            # Ver todas las regiones disponibles
fly platform vm-sizes           # Ver tamaños de VM disponibles
```

---

## 🗄️ Supabase

```bash
# Setup
npm install -g supabase         # Instalar CLI
supabase login                  # Login
supabase init                   # Inicializar proyecto local

# Link Proyecto
supabase link                   # Link interactivo
supabase link --project-ref XXX # Link directo

# Edge Functions
supabase functions list         # Listar functions
supabase functions deploy       # Desplegar todas
supabase functions deploy server # Desplegar function específica
supabase functions delete server # Eliminar function
supabase functions serve        # Servir localmente

# Database
supabase db pull                # Pull schema desde remoto
supabase db push                # Push migrations
supabase db reset               # Reset DB local
supabase migration list         # Listar migrations
supabase migration new nombre   # Crear nueva migration

# Status y Logs
supabase status                 # Ver status
supabase functions logs         # Ver logs de functions
supabase functions logs server  # Logs de function específica

# Local Development
supabase start                  # Iniciar Supabase local
supabase stop                   # Detener Supabase local
```

---

## 📧 Resend (desde terminal)

```bash
# Testing con curl
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "test@desokupacionleal.es",
    "to": ["gestion@desokupacionleal.es"],
    "subject": "Test Email",
    "html": "<p>Test</p>"
  }'

# Verificar dominio (desde Resend dashboard)
# https://resend.com/domains
```

---

## 🐳 Docker (si usas Docker localmente)

```bash
# Build
docker build -t desokupa-web .  # Build imagen
docker images                   # Listar imágenes

# Run
docker run -p 8080:8080 desokupa-web # Correr contenedor
docker ps                       # Ver contenedores corriendo
docker ps -a                    # Ver todos los contenedores

# Cleanup
docker stop CONTAINER_ID        # Detener contenedor
docker rm CONTAINER_ID          # Eliminar contenedor
docker rmi IMAGE_ID             # Eliminar imagen
docker system prune             # Limpiar todo no usado
```

---

## 🔍 Testing y Debugging

```bash
# Build size analysis
du -sh dist                     # Tamaño del build
du -sh dist/*                   # Tamaño por directorio

# Performance testing
lighthouse https://tu-url.fly.dev --view # Lighthouse audit

# Network debugging
curl -I https://tu-url.fly.dev  # Ver headers HTTP
curl https://tu-url.fly.dev/health # Health check

# DNS checking
dig dominio.com                 # Verificar DNS
nslookup dominio.com            # Lookup DNS
```

---

## 🛠️ Scripts Personalizados

```bash
# Ejecutar scripts del proyecto
./scripts/setup.sh              # Setup inicial
./scripts/first-deploy.sh       # Primer deploy completo

# Hacer ejecutable
chmod +x scripts/setup.sh       # Dar permisos
```

---

## ⚡ Comandos Combinados Útiles

```bash
# Build, test y deploy en un comando
npm run build && fly deploy

# Ver logs mientras haces deploy
fly deploy & fly logs

# Actualizar, build y deploy
git pull && npm ci && npm run build && fly deploy

# Full cleanup y fresh install
rm -rf node_modules dist && npm ci && npm run build

# Check de todo antes de deploy
npm run lint && npm run build && echo "✅ Todo bien, listo para deploy"

# Ver último deploy
fly releases | head -n 2

# Rollback rápido al anterior
fly releases rollback $(fly releases --json | jq -r '.[1].Version')
```

---

## 📝 Aliases Útiles (agregar a ~/.bashrc o ~/.zshrc)

```bash
# Fly.io shortcuts
alias fl='fly logs'
alias fs='fly status'
alias fd='fly deploy'
alias fo='fly open'

# Git shortcuts  
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline'

# NPM shortcuts
alias nr='npm run'
alias nrd='npm run dev'
alias nrb='npm run build'

# Combined
alias deploy='npm run build && fly deploy'
alias quick='git add . && git commit -m "Quick update" && git push'
```

Después de agregar, recarga:
```bash
source ~/.bashrc  # o ~/.zshrc
```

---

## 🎯 Workflows Comunes

### Deploy rápido
```bash
git add .
git commit -m "Update"
git push
# GitHub Actions despliega automáticamente
```

### Deploy urgente (manual)
```bash
npm run build
fly deploy
```

### Ver qué está pasando en producción
```bash
fly status
fly logs
```

### Rollback si algo salió mal
```bash
fly releases
fly releases rollback vXXX
```

### Actualizar dependencias
```bash
npm update
npm run build
git add .
git commit -m "Update dependencies"
git push
```

---

## 🆘 Troubleshooting Commands

```bash
# App no responde
fly status
fly checks list
fly restart

# Build falla
npm run build  # Ver error localmente
npm run lint   # Verificar TypeScript

# Deploy falla
fly logs       # Ver qué pasó
fly releases   # Ver historial

# Email no funciona
fly secrets list  # Verificar RESEND_API_KEY

# Variables no funcionan
fly secrets list  # Ver todas las secrets
```

---

## 📊 Monitoring en una línea

```bash
# Loop infinito de logs
while true; do fly logs; sleep 1; done

# Watch status cada 5 segundos
watch -n 5 fly status

# Monitor múltiples cosas
fly status && fly logs --count=20 && fly releases | head -n 5
```

---

## 💡 Pro Tips

1. **Aliases**: Configura aliases para comandos frecuentes
2. **Watch logs**: Mantén `fly logs` abierto en una terminal
3. **GitHub Actions**: Monitorea deploys en GitHub Actions tab
4. **Lighthouse CI**: Automatiza performance testing
5. **Pre-commit hooks**: Valida código antes de commit

---

**Última actualización**: Enero 2025
