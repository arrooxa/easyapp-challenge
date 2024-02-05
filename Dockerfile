FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENV DB_USER easyapp
ENV DB_PASSWORD zHCZKLIAPXPSMyJU
ENV DB_CLUSTER cluster0.9e15erw
ENV JWT_SECRET easyapp123

CMD [ "npm", "start" ]