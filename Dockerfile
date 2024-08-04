FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --production

RUN npm run build

RUN rm -fr node_modules

CMD ["npm", "run", "start"]