# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]