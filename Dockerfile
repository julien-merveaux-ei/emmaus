# --- Étape 1 : build de l'appli Vite ---
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Étape 2 : image finale, uniquement Node + les fichiers construits ---
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=80
COPY package.json server.js ./
COPY --from=build /app/dist ./dist
EXPOSE 80
CMD ["node", "server.js"]
