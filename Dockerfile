# One container that serves the built front end and the API.
# The SQLite file lives in /app/server/data: mount a persistent volume there.
FROM node:24-slim

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001
VOLUME ["/app/server/data"]

CMD ["node", "server/index.ts"]
