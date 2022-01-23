FROM node:14.17.4
WORKDIR /server
COPY . /server/
RUN npm install --production

EXPOSE 8080

CMD ["node", "dist/main.js"]