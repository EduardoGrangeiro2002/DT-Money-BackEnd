FROM node


WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@8.7.0

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]