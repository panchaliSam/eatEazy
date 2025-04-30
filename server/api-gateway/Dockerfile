# Use Alpine-based Node.js image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/api-gateway

# Install necessary build dependencies for any native modules
RUN apk add --no-cache --virtual .build-deps build-base python3 openssl

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the API Gateway port
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]

# Clean up build dependencies
RUN apk del .build-deps