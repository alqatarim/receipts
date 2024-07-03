# Description: Dockerfile for the Node.js application
FROM node:21-slim

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose a port (if your application listens on a specific port)
EXPOSE 8081

CMD [ "node", "server.js" ]