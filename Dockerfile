#build the image using docker buildx build . -t myuom
#Run the image using docker run -p 3000:3000 myuom 

# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install dependencies first to leverage Docker cache
COPY package.json package-lock.json ./

# Using cache mount for npm install, so unchanged packages aren’t downloaded every time
RUN --mount=type=cache,target=/root/.npm \
    npm install

# Update browserslist-db
RUN npx update-browserslist-db@latest

# Bundle app source inside Docker image it excludes files in .dockerignore
COPY .. .

# Build the app
RUN npm run build

# Copy build to shared volume
RUN cp -r build /usr/src/app
