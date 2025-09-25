FROM node:18

WORKDIR /app

# Copia package.json e instala deps
COPY package*.json ./
RUN npm install

# Copia todo o código (inclui prisma/schema.prisma)
COPY . .

# Gera Prisma client **depois de copiar os ficheiros**
RUN npx prisma generate

# Compila TS
RUN npm run build

# **IMPORTANTE: Gera novamente o client após a build**
RUN npx prisma generate

# Instala dockerize para aguardar pela DB
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

# Aguarda pela DB, gera client, aplica migrations e arranca o server
CMD dockerize -wait tcp://db:5432 -timeout 30s sh -c "npx prisma generate && npx prisma migrate deploy && npm run start"