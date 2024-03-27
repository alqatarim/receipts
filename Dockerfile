# Use the latest LTS version of Node.js as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (or any other port your application listens to)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
