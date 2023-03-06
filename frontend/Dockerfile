FROM node:19.7-alpine

WORKDIR /app
COPY . ./
RUN npm install -g npm
RUN npm install

ENTRYPOINT ["/bin/sh"]
CMD ["./entrypoint.sh"]
