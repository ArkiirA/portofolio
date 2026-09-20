# ---------- Stage 1: Build the Astro site ----------
FROM node:22.13-alpine AS builder

WORKDIR /app

# Install dependencies first for better caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve the static files with Nginx ----------
FROM nginx:alpine

# Optional: use a custom Nginx config for caching & 404 handling
# (create the nginx.conf file as shown in the next step)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
