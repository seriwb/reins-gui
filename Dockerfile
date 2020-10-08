FROM golang:1.15 AS reins-builder

RUN apt-get update && \
  apt-get install -y git unzip build-essential && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /go/src/github.com/seriwb/reins-go
COPY . .
RUN make install


FROM alpine AS reins-app

WORKDIR /reins
COPY --from=go-builder /go/src/github.com/seriwb/reins-go/build/ .
COPY --from=go-builder /go/src/github.com/seriwb/reins-go/configs ./configs