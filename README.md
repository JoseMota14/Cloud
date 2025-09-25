# Cloud

Short version of a cloud to deploy itens

## Frontend

## Backend

## Docker

docker compose up -d --build
docker compose exec backend npx prisma migrate dev --name init

### Commands

docker run --name pg -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=cloud -p 5432:5432 -d postgres

npm install @prisma/client + npm install -D prisma

npx prisma init

##

# 1. Iniciar apenas a base de dados

docker-compose up -d

# 2. Aguardar que a DB esteja pronta (opcional - verificar)

docker-compose logs db

# 3. No diretório do backend - gerar Prisma client

cd backend
npm install
npx prisma generate

# 4. Executar migrations

npx prisma migrate dev

# 5. (Opcional) Visualizar dados na DB

npx prisma studio

# 6. Iniciar backend em modo development

npm run dev

# ou para auto-reload:

npm run dev:watch

# 7. Iniciar frontend (noutra terminal)

cd ../frontend
npm install
npm start

# ou

npm run dev

# Para parar tudo:

# Ctrl+C nos terminais do backend/frontend

# docker-compose down
