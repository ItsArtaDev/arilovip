# Build frontend
FROM node:16-alpine as builder
WORKDIR /app
COPY arilovip/frontend/package*.json ./
RUN npm install
COPY arilovip/frontend ./
RUN npm run build

# Build backend
FROM node:16-alpine
WORKDIR /app
COPY arilovip/backend/package*.json ./
RUN npm install
COPY arilovip/backend ./
COPY --from=builder /app/dist ./frontend/dist

EXPOSE 3000
CMD ["node", "index.js"]
