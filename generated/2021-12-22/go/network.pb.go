// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.3
// source: primitives/network.proto

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

type Network int32

const (
	Network_NETWORK_UNDEFINED Network = 0
	Network_ETH_MAINNET       Network = 1
	Network_ETH_RINKEBY       Network = 2
	Network_SOL_MAINNET       Network = 3
	Network_SOL_DEVNET        Network = 4
	Network_BTC_MAINNET       Network = 5
)

// Enum value maps for Network.
var (
	Network_name = map[int32]string{
		0: "NETWORK_UNDEFINED",
		1: "ETH_MAINNET",
		2: "ETH_RINKEBY",
		3: "SOL_MAINNET",
		4: "SOL_DEVNET",
		5: "BTC_MAINNET",
	}
	Network_value = map[string]int32{
		"NETWORK_UNDEFINED": 0,
		"ETH_MAINNET":       1,
		"ETH_RINKEBY":       2,
		"SOL_MAINNET":       3,
		"SOL_DEVNET":        4,
		"BTC_MAINNET":       5,
	}
)

func (x Network) Enum() *Network {
	p := new(Network)
	*p = x
	return p
}

func (x Network) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Network) Descriptor() protoreflect.EnumDescriptor {
	return file_primitives_network_proto_enumTypes[0].Descriptor()
}

func (Network) Type() protoreflect.EnumType {
	return &file_primitives_network_proto_enumTypes[0]
}

func (x Network) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Network.Descriptor instead.
func (Network) EnumDescriptor() ([]byte, []int) {
	return file_primitives_network_proto_rawDescGZIP(), []int{0}
}

var File_primitives_network_proto protoreflect.FileDescriptor

var file_primitives_network_proto_rawDesc = []byte{
	0x0a, 0x18, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x2a, 0x74, 0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12,
	0x15, 0x0a, 0x11, 0x4e, 0x45, 0x54, 0x57, 0x4f, 0x52, 0x4b, 0x5f, 0x55, 0x4e, 0x44, 0x45, 0x46,
	0x49, 0x4e, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x45, 0x54, 0x48, 0x5f, 0x4d, 0x41,
	0x49, 0x4e, 0x4e, 0x45, 0x54, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x45, 0x54, 0x48, 0x5f, 0x52,
	0x49, 0x4e, 0x4b, 0x45, 0x42, 0x59, 0x10, 0x02, 0x12, 0x0f, 0x0a, 0x0b, 0x53, 0x4f, 0x4c, 0x5f,
	0x4d, 0x41, 0x49, 0x4e, 0x4e, 0x45, 0x54, 0x10, 0x03, 0x12, 0x0e, 0x0a, 0x0a, 0x53, 0x4f, 0x4c,
	0x5f, 0x44, 0x45, 0x56, 0x4e, 0x45, 0x54, 0x10, 0x04, 0x12, 0x0f, 0x0a, 0x0b, 0x42, 0x54, 0x43,
	0x5f, 0x4d, 0x41, 0x49, 0x4e, 0x4e, 0x45, 0x54, 0x10, 0x05, 0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x3b,
	0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_primitives_network_proto_rawDescOnce sync.Once
	file_primitives_network_proto_rawDescData = file_primitives_network_proto_rawDesc
)

func file_primitives_network_proto_rawDescGZIP() []byte {
	file_primitives_network_proto_rawDescOnce.Do(func() {
		file_primitives_network_proto_rawDescData = protoimpl.X.CompressGZIP(file_primitives_network_proto_rawDescData)
	})
	return file_primitives_network_proto_rawDescData
}

var file_primitives_network_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_primitives_network_proto_goTypes = []interface{}{
	(Network)(0), // 0: metadata.network
}
var file_primitives_network_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_primitives_network_proto_init() }
func file_primitives_network_proto_init() {
	if File_primitives_network_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_primitives_network_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_primitives_network_proto_goTypes,
		DependencyIndexes: file_primitives_network_proto_depIdxs,
		EnumInfos:         file_primitives_network_proto_enumTypes,
	}.Build()
	File_primitives_network_proto = out.File
	file_primitives_network_proto_rawDesc = nil
	file_primitives_network_proto_goTypes = nil
	file_primitives_network_proto_depIdxs = nil
}
