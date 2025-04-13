# Use official Nginx image
FROM nginx:alpine

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy your static site files into Nginx's web root
COPY . .

# Expose port 80 (default for Nginx)
EXPOSE 80
