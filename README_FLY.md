# Despliegue en fly.io — Instrucciones

He añadido los archivos necesarios para que fly.io construya la app que está dentro de la carpeta "Crear sitio web (1)".

Archivos añadidos en la raíz del repositorio:
- Dockerfile
- nginx.conf
- .dockerignore
- fly.toml

Pasos rápidos:
1) Instala flyctl y autentícate:
   flyctl auth login

2) Desde la raíz del repo, despliega:
   flyctl deploy

3) Variables/secretos:
   Si tu app necesita variables (SUPABASE_URL, SUPABASE_KEY...), configúralas con:
   flyctl secrets set KEY=value

Notas:
- El Dockerfile copia la carpeta "Crear sitio web (1)" y ejecuta `npm run build`. Vite debe generar la carpeta `dist`.
- Internally Nginx sirve en el puerto 8080; fly.toml lo configura con internal_port = 8080.

Si necesitas que haga el PR con estos cambios, puedo generarlo.
