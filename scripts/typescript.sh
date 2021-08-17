cd protos/$1

protoc --plugin=../../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=../../generated/$1/typescript * --ts_proto_opt=esModuleInterop=true