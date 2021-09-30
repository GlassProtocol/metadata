// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.6.1
// source: video/stream.proto

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

type Stream struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	StreamId  string `protobuf:"bytes,1,opt,name=stream_id,json=streamId,proto3" json:"stream_id,omitempty"`
	SessionId string `protobuf:"bytes,2,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
}

func (x *Stream) Reset() {
	*x = Stream{}
	if protoimpl.UnsafeEnabled {
		mi := &file_video_stream_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Stream) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Stream) ProtoMessage() {}

func (x *Stream) ProtoReflect() protoreflect.Message {
	mi := &file_video_stream_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Stream.ProtoReflect.Descriptor instead.
func (*Stream) Descriptor() ([]byte, []int) {
	return file_video_stream_proto_rawDescGZIP(), []int{0}
}

func (x *Stream) GetStreamId() string {
	if x != nil {
		return x.StreamId
	}
	return ""
}

func (x *Stream) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

var File_video_stream_proto protoreflect.FileDescriptor

var file_video_stream_proto_rawDesc = []byte{
	0x0a, 0x12, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x44,
	0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x49, 0x64, 0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_video_stream_proto_rawDescOnce sync.Once
	file_video_stream_proto_rawDescData = file_video_stream_proto_rawDesc
)

func file_video_stream_proto_rawDescGZIP() []byte {
	file_video_stream_proto_rawDescOnce.Do(func() {
		file_video_stream_proto_rawDescData = protoimpl.X.CompressGZIP(file_video_stream_proto_rawDescData)
	})
	return file_video_stream_proto_rawDescData
}

var file_video_stream_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_video_stream_proto_goTypes = []interface{}{
	(*Stream)(nil), // 0: metadata.stream
}
var file_video_stream_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_video_stream_proto_init() }
func file_video_stream_proto_init() {
	if File_video_stream_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_video_stream_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Stream); i {
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
			RawDescriptor: file_video_stream_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_video_stream_proto_goTypes,
		DependencyIndexes: file_video_stream_proto_depIdxs,
		MessageInfos:      file_video_stream_proto_msgTypes,
	}.Build()
	File_video_stream_proto = out.File
	file_video_stream_proto_rawDesc = nil
	file_video_stream_proto_goTypes = nil
	file_video_stream_proto_depIdxs = nil
}
