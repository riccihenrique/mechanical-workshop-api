FROM node:20.10-alpine
WORKDIR /mechanical-workshop/backend
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
