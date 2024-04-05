FROM node:21-slim

# Set the working directory
WORKDIR /app

# Main Directory MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Backend Directory BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

WORKDIR /app/node-backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Frontend Directory FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF

WORKDIR /app/react-frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Command to run the application

WORKDIR /app

COPY start.sh /start.sh
RUN chmod +x /start.sh


# Copy application code
COPY . .

# Expose a port (if your application listens on a specific port)
EXPOSE 3000
EXPOSE 3001

CMD [ "/bin/bash", "-c", "/start.sh" ]


