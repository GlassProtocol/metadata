// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.3
// source: profiles/profile_metadata.proto

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

type Profile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name          string       `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Bio           string       `protobuf:"bytes,2,opt,name=bio,proto3" json:"bio,omitempty"`
	ProfileImages []*Thumbnail `protobuf:"bytes,3,rep,name=profile_images,json=profileImages,proto3" json:"profile_images,omitempty"`
	BannerImages  []*Thumbnail `protobuf:"bytes,4,rep,name=banner_images,json=bannerImages,proto3" json:"banner_images,omitempty"`
}

func (x *Profile) Reset() {
	*x = Profile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_profiles_profile_metadata_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Profile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Profile) ProtoMessage() {}

func (x *Profile) ProtoReflect() protoreflect.Message {
	mi := &file_profiles_profile_metadata_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Profile.ProtoReflect.Descriptor instead.
func (*Profile) Descriptor() ([]byte, []int) {
	return file_profiles_profile_metadata_proto_rawDescGZIP(), []int{0}
}

func (x *Profile) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Profile) GetBio() string {
	if x != nil {
		return x.Bio
	}
	return ""
}

func (x *Profile) GetProfileImages() []*Thumbnail {
	if x != nil {
		return x.ProfileImages
	}
	return nil
}

func (x *Profile) GetBannerImages() []*Thumbnail {
	if x != nil {
		return x.BannerImages
	}
	return nil
}

var File_profiles_profile_metadata_proto protoreflect.FileDescriptor

var file_profiles_profile_metadata_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x1a, 0x70, 0x72, 0x69,
	0x6d, 0x69, 0x74, 0x69, 0x76, 0x65, 0x73, 0x2f, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69,
	0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa5, 0x01, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x62, 0x69, 0x6f, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x62, 0x69, 0x6f, 0x12, 0x3a, 0x0a, 0x0e, 0x70, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x5f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x13, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x74, 0x68, 0x75,
	0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x52, 0x0d, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x49,
	0x6d, 0x61, 0x67, 0x65, 0x73, 0x12, 0x38, 0x0a, 0x0d, 0x62, 0x61, 0x6e, 0x6e, 0x65, 0x72, 0x5f,
	0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69,
	0x6c, 0x52, 0x0c, 0x62, 0x61, 0x6e, 0x6e, 0x65, 0x72, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x42,
	0x0c, 0x5a, 0x0a, 0x2f, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_profiles_profile_metadata_proto_rawDescOnce sync.Once
	file_profiles_profile_metadata_proto_rawDescData = file_profiles_profile_metadata_proto_rawDesc
)

func file_profiles_profile_metadata_proto_rawDescGZIP() []byte {
	file_profiles_profile_metadata_proto_rawDescOnce.Do(func() {
		file_profiles_profile_metadata_proto_rawDescData = protoimpl.X.CompressGZIP(file_profiles_profile_metadata_proto_rawDescData)
	})
	return file_profiles_profile_metadata_proto_rawDescData
}

var file_profiles_profile_metadata_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_profiles_profile_metadata_proto_goTypes = []interface{}{
	(*Profile)(nil),   // 0: metadata.profile
	(*Thumbnail)(nil), // 1: metadata.thumbnail
}
var file_profiles_profile_metadata_proto_depIdxs = []int32{
	1, // 0: metadata.profile.profile_images:type_name -> metadata.thumbnail
	1, // 1: metadata.profile.banner_images:type_name -> metadata.thumbnail
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_profiles_profile_metadata_proto_init() }
func file_profiles_profile_metadata_proto_init() {
	if File_profiles_profile_metadata_proto != nil {
		return
	}
	file_primitives_thumbnail_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_profiles_profile_metadata_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Profile); i {
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
			RawDescriptor: file_profiles_profile_metadata_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_profiles_profile_metadata_proto_goTypes,
		DependencyIndexes: file_profiles_profile_metadata_proto_depIdxs,
		MessageInfos:      file_profiles_profile_metadata_proto_msgTypes,
	}.Build()
	File_profiles_profile_metadata_proto = out.File
	file_profiles_profile_metadata_proto_rawDesc = nil
	file_profiles_profile_metadata_proto_goTypes = nil
	file_profiles_profile_metadata_proto_depIdxs = nil
}
