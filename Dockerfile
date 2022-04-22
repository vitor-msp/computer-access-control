FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY ./dist /usr/src/app/dist
EXPOSE 3000
CMD ["npm", "start"]