FROM node:12-alpine
LABEL Author Sagar Khan <sk.sagarkhan95@gmail.com>

# Additional Dependencies
RUN apk add bash --no-cache

# Set container timezone to IST
RUN apk --update add \
	tzdata \
	&& cp /usr/share/zoneinfo/Asia/Calcutta /etc/localtime \
	&& echo /usr/share/zoneinfo/Asia/Calcutta > /etc/timezone \
	&& apk del tzdata

# Create app directory
WORKDIR /opt/nodets-starter

# Install app dependencies
COPY package.json .

RUN npm install

# Copy app source
COPY . .

# Runtime env argument
ARG runtime
ENV NODE_ENV=$runtime

# Server startup PORT
ARG port
ENV PORT=$port

# Compile application
RUN npm run compile

ENTRYPOINT ["/bin/bash", "-c", "npm run start:$SCOPE"]

EXPOSE ${PORT} 9095
