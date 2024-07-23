FROM node:14-alpine
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
