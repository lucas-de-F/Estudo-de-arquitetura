FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY tsconfig.json .
COPY webpack.config.js .
COPY src/ ./src/

CMD ["npm", "start"]