# Use Alpine-based Node.js image (lighter image)
FROM node:22.13.1-alpine AS build

# Set working directory
WORKDIR /usr/src/auth-service

# Install necessary build dependencies for bcrypt (such as make, gcc, etc.)
RUN apk add --no-cache --virtual .build-deps build-base python3

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy the entire application code
COPY . .

# Rebuild bcrypt (now that the necessary build tools are installed)
RUN npm rebuild bcrypt --build-from-source

# Expose the authentication service port
EXPOSE 4001

# Command to run the application
CMD ["npm", "start"]

# Clean up build dependencies after bcrypt rebuild
RUN apk del .build-deps
