# Stage 1: Build the React application
FROM node:14-alpine as build
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with serve
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]
