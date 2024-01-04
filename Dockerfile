FROM node:alpine as node

FROM node as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node as final

RUN mkdir -p /app/dist

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "./dist/index.js"] 