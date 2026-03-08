FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy entire repository to have all modules available
COPY . .

# Install dependencies for all packages
RUN find . -name "package.json" -not -path "./node_modules/*" -execdir npm ci --only=production \;

# Create data directory for persistent storage
RUN mkdir -p /data

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=production
ENV PORT=8080

# Change to integrated-main directory and start
WORKDIR /app/integrated-main
CMD ["npm", "start"]