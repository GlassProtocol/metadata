mkdir -p generated/$1/typescript
mkdir -p generated/$1/go

cd protos/$1

protoc --go_out=../../generated/$1/go */* 

protoc --plugin=../../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=../../generated/$1/typescript */* --ts_proto_opt=esModuleInterop=true  --ts_proto_opt=snakeToCamel=false