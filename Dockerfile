FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY integrated-main/package*.json ./integrated-main/
COPY legacy-src/package*.json ./legacy-src/
COPY brain-plugin/package*.json ./brain-plugin/
COPY master-runtime/package*.json ./master-runtime/

# Install dependencies
RUN cd integrated-main && npm ci --only=production && \
    cd ../legacy-src && npm ci --only=production && \
    cd ../brain-plugin && npm ci --only=production && \
    cd ../master-runtime && npm ci --only=production

# Copy application code
COPY integrated-main/ ./integrated-main/
COPY legacy-src/ ./legacy-src/
COPY brain-plugin/ ./brain-plugin/
COPY master-runtime/ ./master-runtime/
COPY sources/ ./sources/

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