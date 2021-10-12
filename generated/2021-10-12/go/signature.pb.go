// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.18.0
// source: primitives/signature.proto

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

type Signature struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FinancialPublicKey    *Address `protobuf:"bytes,1,opt,name=financial_public_key,json=financialPublicKey,proto3" json:"financial_public_key,omitempty"`           // crypto address used to attest to a given address
	Ed25519ExpirationTime int64    `protobuf:"varint,2,opt,name=ed25519_expiration_time,json=ed25519ExpirationTime,proto3" json:"ed25519_expiration_time,omitempty"` // unix time
	Ed25519PublicKey      string   `protobuf:"bytes,3,opt,name=ed25519_public_key,json=ed25519PublicKey,proto3" json:"ed25519_public_key,omitempty"`                 // the temporary signing key
	Ed25519Attestation    string   `protobuf:"bytes,4,opt,name=ed25519_attestation,json=ed25519Attestation,proto3" json:"ed25519_attestation,omitempty"`             // signature of ed25519_public_key + ed25519_expiration_time
	MetadataSignature     string   `protobuf:"bytes,5,opt,name=metadata_signature,json=metadataSignature,proto3" json:"metadata_signature,omitempty"`                // signed by the ed25519 tmp key
}

func (x *Signature) Reset() {
	*x = Signature{}
	if protoimpl.UnsafeEnabled {
		mi := &file_primitives_signature_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Signature) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Signature) ProtoMessage() {}

func (x *Signature) ProtoReflect() protoreflect.Message {
	mi := &file_primitives_signature_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Signature.ProtoReflect.Descriptor instead.
func (*Signature) Descriptor() ([]byte, []int) {
	return file_primitives_signature_proto_rawDescGZIP(), []int{0}
}

func (x *Signature) GetFinancialPublicKey() *Address {
	if x != nil {
		return x.FinancialPublicKey
	}
	return nil
}

func (x *Signature) GetEd25519ExpirationTime() int64 {
	if x != nil {
		return x.Ed25519ExpirationTime
	}
	return 0
}

func (x *Signature) GetEd25519PublicKey() string {
	if x != nil {
		return x.Ed25519PublicKey
	}
	return ""
}

func (x *Signature) GetEd25519Attestation() string {
	if x != nil {
		return x.Ed25519Attestation
	}
	return ""
}

func (x *Signature) GetMetadataSignature() string {
	if x != nil {
		return x.MetadataSignature
	}
	return ""
}

var File_primitives_signature_proto protoreflect.FileDescriptor

var file_primitives_signature_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x73, 0x69, 0x67,
	0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x18, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76,
	0x65, 0x73, 0x2f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x96, 0x02, 0x0a, 0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x43,
	0x0a, 0x14, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x70, 0x75, 0x62, 0x6c,
	0x69, 0x63, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52,
	0x12, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63,
	0x4b, 0x65, 0x79, 0x12, 0x36, 0x0a, 0x17, 0x65, 0x64, 0x32, 0x35, 0x35, 0x31, 0x39, 0x5f, 0x65,
	0x78, 0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x15, 0x65, 0x64, 0x32, 0x35, 0x35, 0x31, 0x39, 0x45, 0x78, 0x70,
	0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x2c, 0x0a, 0x12, 0x65,
	0x64, 0x32, 0x35, 0x35, 0x31, 0x39, 0x5f, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x6b, 0x65,
	0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x65, 0x64, 0x32, 0x35, 0x35, 0x31, 0x39,
	0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x12, 0x2f, 0x0a, 0x13, 0x65, 0x64, 0x32,
	0x35, 0x35, 0x31, 0x39, 0x5f, 0x61, 0x74, 0x74, 0x65, 0x73, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x65, 0x64, 0x32, 0x35, 0x35, 0x31, 0x39, 0x41,
	0x74, 0x74, 0x65, 0x73, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2d, 0x0a, 0x12, 0x6d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x53, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x3b, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_primitives_signature_proto_rawDescOnce sync.Once
	file_primitives_signature_proto_rawDescData = file_primitives_signature_proto_rawDesc
)

func file_primitives_signature_proto_rawDescGZIP() []byte {
	file_primitives_signature_proto_rawDescOnce.Do(func() {
		file_primitives_signature_proto_rawDescData = protoimpl.X.CompressGZIP(file_primitives_signature_proto_rawDescData)
	})
	return file_primitives_signature_proto_rawDescData
}

var file_primitives_signature_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_primitives_signature_proto_goTypes = []interface{}{
	(*Signature)(nil), // 0: metadata.signature
	(*Address)(nil),   // 1: metadata.address
}
var file_primitives_signature_proto_depIdxs = []int32{
	1, // 0: metadata.signature.financial_public_key:type_name -> metadata.address
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_primitives_signature_proto_init() }
func file_primitives_signature_proto_init() {
	if File_primitives_signature_proto != nil {
		return
	}
	file_primitives_address_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_primitives_signature_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Signature); i {
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
			RawDescriptor: file_primitives_signature_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_primitives_signature_proto_goTypes,
		DependencyIndexes: file_primitives_signature_proto_depIdxs,
		MessageInfos:      file_primitives_signature_proto_msgTypes,
	}.Build()
	File_primitives_signature_proto = out.File
	file_primitives_signature_proto_rawDesc = nil
	file_primitives_signature_proto_goTypes = nil
	file_primitives_signature_proto_depIdxs = nil
}
