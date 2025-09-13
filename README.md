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
