/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface link {
  uri: string;
  content_type: string;
}

const baselink: object = { uri: "", content_type: "" };

export const link = {
  encode(message: link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.content_type !== "") {
      writer.uint32(18).string(message.content_type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): link {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baselink } as link;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.content_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): link {
    const message = { ...baselink } as link;
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = String(object.content_type);
    } else {
      message.content_type = "";
    }
    return message;
  },

  toJSON(message: link): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.content_type !== undefined &&
      (obj.content_type = message.content_type);
    return obj;
  },

  fromPartial(object: DeepPartial<link>): link {
    const message = { ...baselink } as link;
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = object.content_type;
    } else {
      message.content_type = "";
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
