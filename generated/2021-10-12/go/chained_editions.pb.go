// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.18.0
// source: monetizations/chained_editions.proto

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

type ChainedEditions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Network          Network    `protobuf:"varint,1,opt,name=network,proto3,enum=metadata.Network" json:"network,omitempty"`
	ContractAddress  *Address   `protobuf:"bytes,2,opt,name=contract_address,json=contractAddress,proto3" json:"contract_address,omitempty"`
	MintkeyContracts []*Address `protobuf:"bytes,3,rep,name=mintkey_contracts,json=mintkeyContracts,proto3" json:"mintkey_contracts,omitempty"`
}

func (x *ChainedEditions) Reset() {
	*x = ChainedEditions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_monetizations_chained_editions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChainedEditions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChainedEditions) ProtoMessage() {}

func (x *ChainedEditions) ProtoReflect() protoreflect.Message {
	mi := &file_monetizations_chained_editions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChainedEditions.ProtoReflect.Descriptor instead.
func (*ChainedEditions) Descriptor() ([]byte, []int) {
	return file_monetizations_chained_editions_proto_rawDescGZIP(), []int{0}
}

func (x *ChainedEditions) GetNetwork() Network {
	if x != nil {
		return x.Network
	}
	return Network_NETWORK_UNDEFINED
}

func (x *ChainedEditions) GetContractAddress() *Address {
	if x != nil {
		return x.ContractAddress
	}
	return nil
}

func (x *ChainedEditions) GetMintkeyContracts() []*Address {
	if x != nil {
		return x.MintkeyContracts
	}
	return nil
}

var File_monetizations_chained_editions_proto protoreflect.FileDescriptor

var file_monetizations_chained_editions_proto_rawDesc = []byte{
	0x0a, 0x24, 0x6d, 0x6f, 0x6e, 0x65, 0x74, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x65, 0x64, 0x5f, 0x65, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x1a, 0x18, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x70, 0x72, 0x69, 0x6d,
	0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbd, 0x01, 0x0a, 0x10, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x65, 0x64,
	0x5f, 0x65, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x2b, 0x0a, 0x07, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52, 0x07, 0x6e,
	0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x3c, 0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61,
	0x63, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x61, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x52, 0x0f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x41, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x12, 0x3e, 0x0a, 0x11, 0x6d, 0x69, 0x6e, 0x74, 0x6b, 0x65, 0x79, 0x5f,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x11, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x52, 0x10, 0x6d, 0x69, 0x6e, 0x74, 0x6b, 0x65, 0x79, 0x43, 0x6f, 0x6e, 0x74, 0x72,
	0x61, 0x63, 0x74, 0x73, 0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_monetizations_chained_editions_proto_rawDescOnce sync.Once
	file_monetizations_chained_editions_proto_rawDescData = file_monetizations_chained_editions_proto_rawDesc
)

func file_monetizations_chained_editions_proto_rawDescGZIP() []byte {
	file_monetizations_chained_editions_proto_rawDescOnce.Do(func() {
		file_monetizations_chained_editions_proto_rawDescData = protoimpl.X.CompressGZIP(file_monetizations_chained_editions_proto_rawDescData)
	})
	return file_monetizations_chained_editions_proto_rawDescData
}

var file_monetizations_chained_editions_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_monetizations_chained_editions_proto_goTypes = []interface{}{
	(*ChainedEditions)(nil), // 0: metadata.chained_editions
	(Network)(0),            // 1: metadata.network
	(*Address)(nil),         // 2: metadata.address
}
var file_monetizations_chained_editions_proto_depIdxs = []int32{
	1, // 0: metadata.chained_editions.network:type_name -> metadata.network
	2, // 1: metadata.chained_editions.contract_address:type_name -> metadata.address
	2, // 2: metadata.chained_editions.mintkey_contracts:type_name -> metadata.address
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_monetizations_chained_editions_proto_init() }
func file_monetizations_chained_editions_proto_init() {
	if File_monetizations_chained_editions_proto != nil {
		return
	}
	file_primitives_address_proto_init()
	file_primitives_network_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_monetizations_chained_editions_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChainedEditions); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_monetizations_chained_editions_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_monetizations_chained_editions_proto_goTypes,
		DependencyIndexes: file_monetizations_chained_editions_proto_depIdxs,
		MessageInfos:      file_monetizations_chained_editions_proto_msgTypes,
	}.Build()
	File_monetizations_chained_editions_proto = out.File
	file_monetizations_chained_editions_proto_rawDesc = nil
	file_monetizations_chained_editions_proto_goTypes = nil
	file_monetizations_chained_editions_proto_depIdxs = nil
}
