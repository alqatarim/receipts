FROM node:21-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .
# branch 27 /push 27
# Expose port
EXPOSE 3001

# Command to run the application
CMD ["node", "server.js"]
