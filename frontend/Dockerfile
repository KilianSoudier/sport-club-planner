FROM node:20

WORKDIR /app

COPY package*.json ./
# Install dependencies without optional native packages to avoid platform-specific optional dependency errors
RUN npm ci --silent --no-optional

# Keep a copy of node_modules in the image so we can populate a named volume at container start
RUN mkdir -p /node_modules_image && cp -a node_modules /node_modules_image/

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
# In dev we mount the full project into /app; the build can rely on that.
# Copy only package files so the initial install is available in the image.

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
