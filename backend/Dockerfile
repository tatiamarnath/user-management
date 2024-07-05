# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the TypeScript code.
RUN npm run build

# Run the web service on container startup.
CMD ["node", "dist/index.js"]
