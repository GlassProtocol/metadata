// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.6.1
// source: video/static.proto

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

type Static struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Loop  bool `protobuf:"varint,1,opt,name=loop,proto3" json:"loop,omitempty"`
	Audio bool `protobuf:"varint,2,opt,name=audio,proto3" json:"audio,omitempty"`
	// Types that are assignable to Monetization:
	//	*Static_Static
	Monetization isStatic_Monetization `protobuf_oneof:"monetization"`
}

func (x *Static) Reset() {
	*x = Static{}
	if protoimpl.UnsafeEnabled {
		mi := &file_video_static_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Static) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Static) ProtoMessage() {}

func (x *Static) ProtoReflect() protoreflect.Message {
	mi := &file_video_static_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Static.ProtoReflect.Descriptor instead.
func (*Static) Descriptor() ([]byte, []int) {
	return file_video_static_proto_rawDescGZIP(), []int{0}
}

func (x *Static) GetLoop() bool {
	if x != nil {
		return x.Loop
	}
	return false
}

func (x *Static) GetAudio() bool {
	if x != nil {
		return x.Audio
	}
	return false
}

func (m *Static) GetMonetization() isStatic_Monetization {
	if m != nil {
		return m.Monetization
	}
	return nil
}

func (x *Static) GetStatic() *Static {
	if x, ok := x.GetMonetization().(*Static_Static); ok {
		return x.Static
	}
	return nil
}

type isStatic_Monetization interface {
	isStatic_Monetization()
}

type Static_Static struct {
	Static *Static `protobuf:"bytes,7,opt,name=static,proto3,oneof"`
}

func (*Static_Static) isStatic_Monetization() {}

var File_video_static_proto protoreflect.FileDescriptor

var file_video_static_proto_rawDesc = []byte{
	0x0a, 0x12, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x63, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x6e,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x69, 0x63, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f, 0x6f, 0x70,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04, 0x6c, 0x6f, 0x6f, 0x70, 0x12, 0x14, 0x0a, 0x05,
	0x61, 0x75, 0x64, 0x69, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x61, 0x75, 0x64,
	0x69, 0x6f, 0x12, 0x2a, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x69, 0x63, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x63, 0x48, 0x00, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x69, 0x63, 0x42, 0x0e,
	0x0a, 0x0c, 0x6d, 0x6f, 0x6e, 0x65, 0x74, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x0c,
	0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_video_static_proto_rawDescOnce sync.Once
	file_video_static_proto_rawDescData = file_video_static_proto_rawDesc
)

func file_video_static_proto_rawDescGZIP() []byte {
	file_video_static_proto_rawDescOnce.Do(func() {
		file_video_static_proto_rawDescData = protoimpl.X.CompressGZIP(file_video_static_proto_rawDescData)
	})
	return file_video_static_proto_rawDescData
}

var file_video_static_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_video_static_proto_goTypes = []interface{}{
	(*Static)(nil), // 0: metadata.static
}
var file_video_static_proto_depIdxs = []int32{
	0, // 0: metadata.static.static:type_name -> metadata.static
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_video_static_proto_init() }
func file_video_static_proto_init() {
	if File_video_static_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_video_static_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Static); i {
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
	file_video_static_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Static_Static)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_video_static_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_video_static_proto_goTypes,
		DependencyIndexes: file_video_static_proto_depIdxs,
		MessageInfos:      file_video_static_proto_msgTypes,
	}.Build()
	File_video_static_proto = out.File
	file_video_static_proto_rawDesc = nil
	file_video_static_proto_goTypes = nil
	file_video_static_proto_depIdxs = nil
}
