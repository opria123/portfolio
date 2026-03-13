#Stage 1
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=4096
ENTRYPOINT ["npx", "vite", "--host"]

#Stage 2
# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/dist .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]