/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { thumbnail } from "../primitives/thumbnail";

export const protobufPackage = "metadata";

export interface profile {
  name: string;
  bio: string;
  profile_images: thumbnail[];
  banner_images: thumbnail[];
}

const baseprofile: object = { name: "", bio: "" };

export const profile = {
  encode(
    message: profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.bio !== "") {
      writer.uint32(18).string(message.bio);
    }
    for (const v of message.profile_images) {
      thumbnail.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.banner_images) {
      thumbnail.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseprofile } as profile;
    message.profile_images = [];
    message.banner_images = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.bio = reader.string();
          break;
        case 3:
          message.profile_images.push(
            thumbnail.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.banner_images.push(thumbnail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): profile {
    const message = { ...baseprofile } as profile;
    message.profile_images = [];
    message.banner_images = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = String(object.bio);
    } else {
      message.bio = "";
    }
    if (object.profile_images !== undefined && object.profile_images !== null) {
      for (const e of object.profile_images) {
        message.profile_images.push(thumbnail.fromJSON(e));
      }
    }
    if (object.banner_images !== undefined && object.banner_images !== null) {
      for (const e of object.banner_images) {
        message.banner_images.push(thumbnail.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: profile): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bio !== undefined && (obj.bio = message.bio);
    if (message.profile_images) {
      obj.profile_images = message.profile_images.map((e) =>
        e ? thumbnail.toJSON(e) : undefined
      );
    } else {
      obj.profile_images = [];
    }
    if (message.banner_images) {
      obj.banner_images = message.banner_images.map((e) =>
        e ? thumbnail.toJSON(e) : undefined
      );
    } else {
      obj.banner_images = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<profile>): profile {
    const message = { ...baseprofile } as profile;
    message.profile_images = [];
    message.banner_images = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    } else {
      message.bio = "";
    }
    if (object.profile_images !== undefined && object.profile_images !== null) {
      for (const e of object.profile_images) {
        message.profile_images.push(thumbnail.fromPartial(e));
      }
    }
    if (object.banner_images !== undefined && object.banner_images !== null) {
      for (const e of object.banner_images) {
        message.banner_images.push(thumbnail.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
