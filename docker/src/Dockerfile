FROM node:8
MAINTAINER AR4 GmbH <office@ar4.io>

RUN apt-get update && apt-get install -y cmake build-essential
RUN git clone https://github.com/belveder79/zxing-cpp.git \
  && cd zxing-cpp && mkdir build && cd build && cmake .. \
  && make -j4 && cd / && cp /zxing-cpp/build/zxing /usr/bin && rm -rf zxing-cpp

RUN mkdir /app
WORKDIR /app
RUN npm install -g nodemon
RUN npm config set registry https://registry.npmjs.org
COPY package.json /app/package.json
RUN npm install \
 && mv /app/node_modules /node_modules
COPY . /app
EXPOSE 3000

