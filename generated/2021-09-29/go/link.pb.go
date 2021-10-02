// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.18.0
// source: primitives/link.proto

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

type Link struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uri         string `protobuf:"bytes,1,opt,name=uri,proto3" json:"uri,omitempty"`
	ContentType string `protobuf:"bytes,2,opt,name=content_type,json=contentType,proto3" json:"content_type,omitempty"`
}

func (x *Link) Reset() {
	*x = Link{}
	if protoimpl.UnsafeEnabled {
		mi := &file_primitives_link_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Link) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Link) ProtoMessage() {}

func (x *Link) ProtoReflect() protoreflect.Message {
	mi := &file_primitives_link_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Link.ProtoReflect.Descriptor instead.
func (*Link) Descriptor() ([]byte, []int) {
	return file_primitives_link_proto_rawDescGZIP(), []int{0}
}

func (x *Link) GetUri() string {
	if x != nil {
		return x.Uri
	}
	return ""
}

func (x *Link) GetContentType() string {
	if x != nil {
		return x.ContentType
	}
	return ""
}

var File_primitives_link_proto protoreflect.FileDescriptor

var file_primitives_link_proto_rawDesc = []byte{
	0x0a, 0x15, 0x70, 0x72, 0x69, 0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x6c, 0x69, 0x6e,
	0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x22, 0x3b, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x69,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x72, 0x69, 0x12, 0x21, 0x0a, 0x0c, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x42, 0x0c,
	0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_primitives_link_proto_rawDescOnce sync.Once
	file_primitives_link_proto_rawDescData = file_primitives_link_proto_rawDesc
)

func file_primitives_link_proto_rawDescGZIP() []byte {
	file_primitives_link_proto_rawDescOnce.Do(func() {
		file_primitives_link_proto_rawDescData = protoimpl.X.CompressGZIP(file_primitives_link_proto_rawDescData)
	})
	return file_primitives_link_proto_rawDescData
}

var file_primitives_link_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_primitives_link_proto_goTypes = []interface{}{
	(*Link)(nil), // 0: metadata.link
}
var file_primitives_link_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_primitives_link_proto_init() }
func file_primitives_link_proto_init() {
	if File_primitives_link_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_primitives_link_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Link); i {
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
			RawDescriptor: file_primitives_link_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_primitives_link_proto_goTypes,
		DependencyIndexes: file_primitives_link_proto_depIdxs,
		MessageInfos:      file_primitives_link_proto_msgTypes,
	}.Build()
	File_primitives_link_proto = out.File
	file_primitives_link_proto_rawDesc = nil
	file_primitives_link_proto_goTypes = nil
	file_primitives_link_proto_depIdxs = nil
}
