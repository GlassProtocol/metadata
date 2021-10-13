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

	AttestingAddress  *Address `protobuf:"bytes,1,opt,name=attesting_address,json=attestingAddress,proto3" json:"attesting_address,omitempty"`    // crypto address used to attest to a given address
	Claims            *Claims  `protobuf:"bytes,2,opt,name=claims,proto3" json:"claims,omitempty"`                                                // this gets signed
	Header            *Header  `protobuf:"bytes,3,opt,name=header,proto3" json:"header,omitempty"`                                                // type of algorithm used
	Attestation       string   `protobuf:"bytes,4,opt,name=attestation,proto3" json:"attestation,omitempty"`                                      // signature of header by the attesting_public_key
	MetadataSignature string   `protobuf:"bytes,5,opt,name=metadata_signature,json=metadataSignature,proto3" json:"metadata_signature,omitempty"` // signed by the temporary key
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

func (x *Signature) GetAttestingAddress() *Address {
	if x != nil {
		return x.AttestingAddress
	}
	return nil
}

func (x *Signature) GetClaims() *Claims {
	if x != nil {
		return x.Claims
	}
	return nil
}

func (x *Signature) GetHeader() *Header {
	if x != nil {
		return x.Header
	}
	return nil
}

func (x *Signature) GetAttestation() string {
	if x != nil {
		return x.Attestation
	}
	return ""
}

func (x *Signature) GetMetadataSignature() string {
	if x != nil {
		return x.MetadataSignature
	}
	return ""
}

type Header struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Algorithm string `protobuf:"bytes,1,opt,name=algorithm,proto3" json:"algorithm,omitempty"` // ed25519
	Encoding  string `protobuf:"bytes,2,opt,name=encoding,proto3" json:"encoding,omitempty"`   // base64URL
}

func (x *Header) Reset() {
	*x = Header{}
	if protoimpl.UnsafeEnabled {
		mi := &file_primitives_signature_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Header) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Header) ProtoMessage() {}

func (x *Header) ProtoReflect() protoreflect.Message {
	mi := &file_primitives_signature_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Header.ProtoReflect.Descriptor instead.
func (*Header) Descriptor() ([]byte, []int) {
	return file_primitives_signature_proto_rawDescGZIP(), []int{1}
}

func (x *Header) GetAlgorithm() string {
	if x != nil {
		return x.Algorithm
	}
	return ""
}

func (x *Header) GetEncoding() string {
	if x != nil {
		return x.Encoding
	}
	return ""
}

type Claims struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Issuer       string `protobuf:"bytes,1,opt,name=issuer,proto3" json:"issuer,omitempty"`                                 // GLASS.XYZ
	TemporaryKey string `protobuf:"bytes,2,opt,name=temporary_key,json=temporaryKey,proto3" json:"temporary_key,omitempty"` // the
	ExpiresAt    string `protobuf:"bytes,3,opt,name=expires_at,json=expiresAt,proto3" json:"expires_at,omitempty"`          // expires at
	IssuedAt     string `protobuf:"bytes,4,opt,name=issued_at,json=issuedAt,proto3" json:"issued_at,omitempty"`             // issued at
}

func (x *Claims) Reset() {
	*x = Claims{}
	if protoimpl.UnsafeEnabled {
		mi := &file_primitives_signature_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Claims) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Claims) ProtoMessage() {}

func (x *Claims) ProtoReflect() protoreflect.Message {
	mi := &file_primitives_signature_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Claims.ProtoReflect.Descriptor instead.
func (*Claims) Descriptor() ([]byte, []int) {
	return file_primitives_signature_proto_rawDescGZIP(), []int{2}
}

func (x *Claims) GetIssuer() string {
	if x != nil {
		return x.Issuer
	}
	return ""
}

func (x *Claims) GetTemporaryKey() string {
	if x != nil {
		return x.TemporaryKey
	}
	return ""
}

func (x *Claims) GetExpiresAt() string {
	if x != nil {
		return x.ExpiresAt
	}
	return ""
}

func (x *Claims) GetIssuedAt() string {
	if x != nil {
		return x.IssuedAt
	}
	return ""
}

var File_primitives_signature_proto protoreflect.FileDescriptor

var file_primitives_signature_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x73, 0x69, 0x67,
	0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x18, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76,
	0x65, 0x73, 0x2f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xf0, 0x01, 0x0a, 0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x3e,
	0x0a, 0x11, 0x61, 0x74, 0x74, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x61, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x2e, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52, 0x10, 0x61, 0x74,
	0x74, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x67, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x28,
	0x0a, 0x06, 0x63, 0x6c, 0x61, 0x69, 0x6d, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x63, 0x6c, 0x61, 0x69, 0x6d, 0x73,
	0x52, 0x06, 0x63, 0x6c, 0x61, 0x69, 0x6d, 0x73, 0x12, 0x28, 0x0a, 0x06, 0x68, 0x65, 0x61, 0x64,
	0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x2e, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x52, 0x06, 0x68, 0x65, 0x61, 0x64,
	0x65, 0x72, 0x12, 0x20, 0x0a, 0x0b, 0x61, 0x74, 0x74, 0x65, 0x73, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x74, 0x74, 0x65, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2d, 0x0a, 0x12, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x5f, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x11, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x53, 0x69, 0x67, 0x6e, 0x61, 0x74,
	0x75, 0x72, 0x65, 0x22, 0x42, 0x0a, 0x06, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x12, 0x1c, 0x0a,
	0x09, 0x61, 0x6c, 0x67, 0x6f, 0x72, 0x69, 0x74, 0x68, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x61, 0x6c, 0x67, 0x6f, 0x72, 0x69, 0x74, 0x68, 0x6d, 0x12, 0x1a, 0x0a, 0x08, 0x65,
	0x6e, 0x63, 0x6f, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x65,
	0x6e, 0x63, 0x6f, 0x64, 0x69, 0x6e, 0x67, 0x22, 0x81, 0x01, 0x0a, 0x06, 0x63, 0x6c, 0x61, 0x69,
	0x6d, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x69, 0x73, 0x73, 0x75, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x69, 0x73, 0x73, 0x75, 0x65, 0x72, 0x12, 0x23, 0x0a, 0x0d, 0x74, 0x65,
	0x6d, 0x70, 0x6f, 0x72, 0x61, 0x72, 0x79, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0c, 0x74, 0x65, 0x6d, 0x70, 0x6f, 0x72, 0x61, 0x72, 0x79, 0x4b, 0x65, 0x79, 0x12,
	0x1d, 0x0a, 0x0a, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x41, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x69, 0x73, 0x73, 0x75, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x69, 0x73, 0x73, 0x75, 0x65, 0x64, 0x41, 0x74, 0x42, 0x0c, 0x5a, 0x0a, 0x2f,
	0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
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

var file_primitives_signature_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_primitives_signature_proto_goTypes = []interface{}{
	(*Signature)(nil), // 0: metadata.signature
	(*Header)(nil),    // 1: metadata.header
	(*Claims)(nil),    // 2: metadata.claims
	(*Address)(nil),   // 3: metadata.address
}
var file_primitives_signature_proto_depIdxs = []int32{
	3, // 0: metadata.signature.attesting_address:type_name -> metadata.address
	2, // 1: metadata.signature.claims:type_name -> metadata.claims
	1, // 2: metadata.signature.header:type_name -> metadata.header
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
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
		file_primitives_signature_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Header); i {
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
		file_primitives_signature_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Claims); i {
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
			NumMessages:   3,
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
