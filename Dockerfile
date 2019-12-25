FROM alpine as build
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-cache
COPY . ./
COPY tsconfig.json tslint.json webpack.config.js ./
RUN npx webpack -p
RUN find ./dist -type f | xargs gzip -k

FROM alpine
RUN apk add --no-cache nginx
RUN mkdir -p /run/nginx/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/local/nginx/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
