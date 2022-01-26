// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.3
// source: primitives/protocol.proto

package metadata

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Protocol int32

const (
	Protocol_PROTOCOL_UNDEFINED Protocol = 0
	Protocol_ETHEREUM           Protocol = 1
	Protocol_SOLANA             Protocol = 2
	Protocol_BITCOIN            Protocol = 3
)

// Enum value maps for Protocol.
var (
	Protocol_name = map[int32]string{
		0: "PROTOCOL_UNDEFINED",
		1: "ETHEREUM",
		2: "SOLANA",
		3: "BITCOIN",
	}
	Protocol_value = map[string]int32{
		"PROTOCOL_UNDEFINED": 0,
		"ETHEREUM":           1,
		"SOLANA":             2,
		"BITCOIN":            3,
	}
)

func (x Protocol) Enum() *Protocol {
	p := new(Protocol)
	*p = x
	return p
}

func (x Protocol) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Protocol) Descriptor() protoreflect.EnumDescriptor {
	return file_primitives_protocol_proto_enumTypes[0].Descriptor()
}

func (Protocol) Type() protoreflect.EnumType {
	return &file_primitives_protocol_proto_enumTypes[0]
}

func (x Protocol) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Protocol.Descriptor instead.
func (Protocol) EnumDescriptor() ([]byte, []int) {
	return file_primitives_protocol_proto_rawDescGZIP(), []int{0}
}

var File_primitives_protocol_proto protoreflect.FileDescriptor

var file_primitives_protocol_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x2a, 0x49, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f,
	0x6c, 0x12, 0x16, 0x0a, 0x12, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x43, 0x4f, 0x4c, 0x5f, 0x55, 0x4e,
	0x44, 0x45, 0x46, 0x49, 0x4e, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x45, 0x54, 0x48,
	0x45, 0x52, 0x45, 0x55, 0x4d, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x4f, 0x4c, 0x41, 0x4e,
	0x41, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x42, 0x49, 0x54, 0x43, 0x4f, 0x49, 0x4e, 0x10, 0x03,
	0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_primitives_protocol_proto_rawDescOnce sync.Once
	file_primitives_protocol_proto_rawDescData = file_primitives_protocol_proto_rawDesc
)

func file_primitives_protocol_proto_rawDescGZIP() []byte {
	file_primitives_protocol_proto_rawDescOnce.Do(func() {
		file_primitives_protocol_proto_rawDescData = protoimpl.X.CompressGZIP(file_primitives_protocol_proto_rawDescData)
	})
	return file_primitives_protocol_proto_rawDescData
}

var file_primitives_protocol_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_primitives_protocol_proto_goTypes = []interface{}{
	(Protocol)(0), // 0: metadata.protocol
}
var file_primitives_protocol_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_primitives_protocol_proto_init() }
func file_primitives_protocol_proto_init() {
	if File_primitives_protocol_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_primitives_protocol_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_primitives_protocol_proto_goTypes,
		DependencyIndexes: file_primitives_protocol_proto_depIdxs,
		EnumInfos:         file_primitives_protocol_proto_enumTypes,
	}.Build()
	File_primitives_protocol_proto = out.File
	file_primitives_protocol_proto_rawDesc = nil
	file_primitives_protocol_proto_goTypes = nil
	file_primitives_protocol_proto_depIdxs = nil
}
