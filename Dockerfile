FROM node:14.18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

# Environment

ARG ENV
ENV ENV $ENV
RUN echo "Environment: ${ENV}"

RUN npm run build

# Deploy en nginx:alpine

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]