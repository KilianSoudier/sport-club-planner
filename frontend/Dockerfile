FROM node:20

WORKDIR /app

COPY package*.json ./
# Install dependencies without optional native packages to avoid platform-specific optional dependency errors
RUN npm ci --silent --no-optional

# In dev we mount the full project into /app; the build can rely on that.
# Copy only package files so the initial install is available in the image.

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
