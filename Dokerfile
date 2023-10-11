FROM  node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
CMD ["npm","run","start"]
