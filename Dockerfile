FROM node:16.13.2
WORKDIR /home/ec2-user/melfoodie
COPY . .
RUN npm i
EXPOSE 3000
CMD npm start