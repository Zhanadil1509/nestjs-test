FROM node:14.17.4
WORKDIR /server
COPY . /server/
RUN npm run build

EXPOSE 8080

CMD npm start