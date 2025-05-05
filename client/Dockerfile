# Stage 1: Build the frontend
FROM node:18 AS builder
WORKDIR /app
# Install dependencies
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built frontend with Nginx
FROM nginx:alpine
# Copy the build output to Nginx's default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port Nginx will serve on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
