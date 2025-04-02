# Use Node.js image
FROM node:22.13.1 AS build

WORKDIR /usr/src/auth-service

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Rebuild bcrypt
RUN npm rebuild bcrypt --build-from-source

# Expose the authentication service port
EXPOSE 4001

# Command to run the application
CMD ["npm", "start"]
