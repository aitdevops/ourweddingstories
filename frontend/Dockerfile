# Use the official Node.js image to build the app
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install
COPY . .
RUN npm run build

# Use the official Nginx image to serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
