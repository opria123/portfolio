#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
ENV GENERATE_SOURCEMAP=false
ENTRYPOINT npm run dev

#Stage 2
# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/dist .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]