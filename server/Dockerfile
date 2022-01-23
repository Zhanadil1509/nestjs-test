FROM node:14.17.4
WORKDIR /server

COPY package.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]