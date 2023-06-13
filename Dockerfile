# syntax=docker/dockerfile:1
   
FROM node:18
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["node", "server.js"]
EXPOSE 3000