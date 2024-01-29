# Use an official Node.js runtime as a base image
FROM node:18

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
