# Multi-stage build that uses the subfolder "Crear sitio web (1)" as source
# Stage 1 — build the Vite app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json only (safer than wildcard copy)
COPY "Crear sitio web (1)/package.json" ./

# Install dependencies (uses npm install to avoid failing on missing lockfile)
RUN npm install --omit=dev

# Copy the rest of the app from the subdirectory
COPY "Crear sitio web (1)" ./

# Build the app (Vite default outputs to dist/)
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:stable-alpine AS runtime

# Remove default content and copy built files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config from repo root
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Internal port used in fly
EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]