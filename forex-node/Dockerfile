FROM node:13.8.0

RUN npm install webpack -g

WORKDIR /app

# install and cache app dependencies
COPY package*.json /app/
RUN npm install

# add app
COPY . /app

# build app from webpack
RUN npm run webpack:production

# start app
CMD [ "/usr/local/bin/node", "./dist/index.js" ]
