cd protos/$1

protoc --go_out=../../generated/$1/go * 