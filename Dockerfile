FROM node:20.11.0

WORKDIR /app
# ideally we should copy only the package.json file  into the root of our app and run npm install
COPY package.json .

RUN npm install
# copy the rest of the files in roor directory(relative to dockerfile) to the root of our app
COPY . .

# expose the port that our app is running on
EXPOSE 5173

# command to run our app as we would manulaly run it
CMD ["npm", "run", "dev"]
