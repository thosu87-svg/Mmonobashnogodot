# Use Node.js 18 Alpine for smaller image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY integrated-main/package.json ./
RUN npm install --production

# Copy the rest of the application
COPY integrated-main/ ./

# Expose port 8080
EXPOSE 8080

# Start the app
CMD ["npm", "start"]