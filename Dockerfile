#build the image using docker buildx build . -t myuom
#Run the image using docker run -p 3000:3000 myuom 

# Use an official Node runtime as the base image
FROM node:lts-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Update browserslist-db
RUN npx update-browserslist-db@latest

# Bundle app source inside Docker image it excludes files in .dockerignore
COPY .. .

# Build the app
RUN npm run build

# Copy build to shared volume
RUN cp -r build /usr/src/app
