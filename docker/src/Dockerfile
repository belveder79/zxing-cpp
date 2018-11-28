FROM buildpack-deps:bionic
MAINTAINER "AR4 GmbH"
RUN apt-get update && apt-get install -y cmake
RUN git clone https://github.com/belveder79/zxing-cpp.git
RUN cd zxing-cpp && mkdir build && cd build && cmake .. && make -j1

