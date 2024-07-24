# Stage 1: Build the React app using an Ubuntu-based Node.js image
FROM node:14-buster AS build
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React app with an Nginx server on Ubuntu
FROM ubuntu:20.04
WORKDIR /usr/share/nginx/html
RUN apt-get update && apt-get install -y nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
