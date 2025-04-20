# Use Alpine-based Node.js image (lighter image)
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/auth-service

# Install necessary build dependencies for bcrypt and Prisma
RUN apk add --no-cache --virtual .build-deps build-base python3 openssl

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Create prisma directory and copy schema
RUN mkdir -p prisma
COPY src/prisma/schema.prisma ./prisma/

# Copy .env file from the src directory
COPY src/.env ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Rebuild bcrypt (now that the necessary build tools are installed)
RUN npm rebuild bcrypt --build-from-source

# Expose the authentication service port
EXPOSE 4001

# Command to run the application
CMD ["npm", "start"]

# Clean up build dependencies after bcrypt rebuild
RUN apk del .build-deps