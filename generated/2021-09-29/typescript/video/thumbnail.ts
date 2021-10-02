/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { link } from "../primitives/link";

export const protobufPackage = "metadata";

export interface thumbnail {
  height: number;
  width: number;
  source: link | undefined;
}

const basethumbnail: object = { height: 0, width: 0 };

export const thumbnail = {
  encode(
    message: thumbnail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint32(message.height);
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.source !== undefined) {
      link.encode(message.source, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): thumbnail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basethumbnail } as thumbnail;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint32();
          break;
        case 2:
          message.width = reader.uint32();
          break;
        case 3:
          message.source = link.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): thumbnail {
    const message = { ...basethumbnail } as thumbnail;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = link.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    return message;
  },

  toJSON(message: thumbnail): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.width !== undefined && (obj.width = message.width);
    message.source !== undefined &&
      (obj.source = message.source ? link.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<thumbnail>): thumbnail {
    const message = { ...basethumbnail } as thumbnail;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = link.fromPartial(object.source);
    } else {
      message.source = undefined;
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
