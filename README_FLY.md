# Despliegue en fly.io — instrucciones y notas

Resumen:
- El Dockerfile en la raíz construye la app que está en la carpeta "Crear sitio web (1)" y la sirve con nginx (puerto interno 8080).
- Para evitar conflictos con manifiestos previos, renombramos temporalmente fly.toml a fly.toml.disabled. Ejecuta `fly launch` desde tu máquina para generar un nuevo manifest limpio si lo deseas.

Pasos para aplicar los cambios (en tu máquina, desde la raíz del repo):

1) Cambiar a la rama que ya existe:
   git fetch origin
   git checkout fix/fly-deploy

2) Crear/pegar los archivos en la raíz:
   - Dockerfile
   - nginx.conf
   - .dockerignore
   - README_FLY.md
   - (opcional) crea fly.toml.disabled si quieres deshabilitar el fly.toml actual

3) Si existe fly.toml y quieres evitar conflictos, renómbralo:
   git mv fly.toml fly.toml.disabled || true

4) Añadir, commitear y push:
   git add Dockerfile nginx.conf .dockerignore README_FLY.md fly.toml.disabled
   git commit -m "fix(deploy): prepare Dockerfile + nginx and disable fly.toml to avoid launch conflicts"
   git push --set-upstream origin fix/fly-deploy

5) Abrir Pull Request (puedes usar la UI de GitHub o gh CLI):
   gh pr create --base main --head fix/fly-deploy --title "fix: prepare fly deploy" --body "Preparo Dockerfile, nginx.conf y disable fly.toml para resolver conflictos de manifiesto."

6) Probar localmente (recomendado antes de deploy):
   docker build -t nune-site .
   docker run --rm -p 8080:8080 nune-site
   Abrir http://localhost:8080 y verificar que la web se sirve correctamente.

7) Regenerar manifest / desplegar en fly (desde tu máquina, con tu cuenta):
   - Autenticación:
     flyctl auth login
   - Generar manifest limpio y crear/actualizar app:
     flyctl launch
     (o desplegar directamente apuntando a la app:)
     flyctl deploy --app <nombre-de-tu-app>

8) Añadir secretos (si tu app los necesita):
   flyctl secrets set SUPABASE_URL="..." SUPABASE_KEY="..."

Notas:
- No guardes secretos en el repositorio.
- Si `flyctl launch` genera un fly.toml nuevo, revísalo y commitealo si quieres que quede en repo:
  git add fly.toml
  git commit -m "chore: add generated fly.toml"
  git push
