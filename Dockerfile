FROM node:4.2-slim
RUN mkdir app
WORKDIR /app
ADD app.js /app
ADD data.js /app
ADD package.json /app
CMD ["node","app.js"]