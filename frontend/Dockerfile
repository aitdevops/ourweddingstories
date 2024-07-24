# Stage 1: Build the React app
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React app with a simple static server
FROM node:14-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist /app
EXPOSE 80
CMD ["http-server", "-p", "80"]
