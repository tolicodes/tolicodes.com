FROM node:14-alpine AS dev

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn

COPY . .

RUN yarn build

CMD yarn start

FROM nginx:1.17 AS prod
COPY --from=dev /app/build /usr/share/nginx/html
