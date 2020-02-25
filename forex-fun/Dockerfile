FROM node:13.8.0

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /app/
RUN npm install
RUN ls -la

# install angular cli
RUN npm install -g @angular/cli@9.0.3

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
