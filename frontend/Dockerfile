# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all project files
COPY . .

# Expose port 5001
EXPOSE 5001

# Start the server
CMD ["node", "server.js"]

