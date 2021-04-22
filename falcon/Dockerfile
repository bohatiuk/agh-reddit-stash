FROM node:latest

COPY . .

RUN npm install --production
RUN npm install -g serve
RUN npm run build

CMD ["serve", "-s build"]