
FROM node:18
WORKDIR /myapp
COPY . .

EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
