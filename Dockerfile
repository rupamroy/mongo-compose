FROM node:4.2-slim
RUN mkdir app
WORKDIR /app
ADD app.js /app
ADD mongoData.js /app
ADD package.json /app
RUN npm install
#CMD ["node","app.js"]