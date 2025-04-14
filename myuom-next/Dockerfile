# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only the dependency files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Update browserslist-db
RUN npx update-browserslist-db@latest

# Copy the rest of the application source code
COPY . .

# Build the app
RUN pnpm run build

# Optionally copy build elsewhere (if needed)
# RUN cp -r build /usr/src/app

# Expose port (make sure this matches your Next.js config)
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
