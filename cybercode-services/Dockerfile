# Stage 1: Build the website

# Use Nginx to serve static site from project root
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only static site files to Nginx web root
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]