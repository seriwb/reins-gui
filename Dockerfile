FROM node:14-slim

RUN apt-get update \
  && apt-get install -y git build-essential \
      libgtk-3.0 libnss3 libasound2 \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /reins-gui

COPY . .

# RUN yarn && yarn build

# CMD ["yarn", "start"]