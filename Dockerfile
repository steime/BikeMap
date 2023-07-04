# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port on which your Node.js app listens
EXPOSE 3000

# Build the TypeScript code
RUN npm run build

# Specify the command to run your Node.js app
CMD ["npm", "start"]
