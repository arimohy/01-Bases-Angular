FROM node:14

# create app directory
WORKDIR /usr/src/app

# install app dependencies 
COPY package*.json ./
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

# bundle app source
COPY . .

# expose port 
EXPOSE 4200

# run the app
CMD ["npm","start"]