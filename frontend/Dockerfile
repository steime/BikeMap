# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY index.html /app
COPY app.js /app

# Expose the port on which your development server will run (e.g., 3000)
EXPOSE 8080

# Start your development server
CMD ["npm", "start"]