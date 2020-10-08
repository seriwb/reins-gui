BINARY_DIR=build
TESTS=go test $$(go list ./... | grep -v /vendor/) -cover

install:
	${TESTS}
	go build -o ${BINARY_DIR}/reins ./cmd

unittest:
	go test -short $$(go list ./... | grep -v /vendor/)

clean:
	if [ -f ${BINARY_DIR} ] ; then rm -rf ${BINARY_DIR} ; fi

.PHONY: clean unittest install