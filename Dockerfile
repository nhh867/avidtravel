# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


# Copy the rest of the application code
COPY . .

# Expose Angular default port
EXPOSE 4200

# Default command for development
CMD ["ng", "serve", "--host", "0.0.0.0"]
