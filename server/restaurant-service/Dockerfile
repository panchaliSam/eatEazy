# Use Node.js image
FROM node:22.13.1 AS build

WORKDIR /usr/src/restaurant-service

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the restaurant service port
EXPOSE 4002

# Command to run the application
CMD ["npm", "start"]
