/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "metadata";

export interface Link {
  Source: string;
  MimeType: string;
}

const baseLink: object = { Source: "", MimeType: "" };

export const Link = {
  encode(message: Link, writer: Writer = Writer.create()): Writer {
    if (message.Source !== "") {
      writer.uint32(10).string(message.Source);
    }
    if (message.MimeType !== "") {
      writer.uint32(18).string(message.MimeType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Link {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLink } as Link;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Source = reader.string();
          break;
        case 2:
          message.MimeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Link {
    const message = { ...baseLink } as Link;
    if (object.Source !== undefined && object.Source !== null) {
      message.Source = String(object.Source);
    } else {
      message.Source = "";
    }
    if (object.MimeType !== undefined && object.MimeType !== null) {
      message.MimeType = String(object.MimeType);
    } else {
      message.MimeType = "";
    }
    return message;
  },

  toJSON(message: Link): unknown {
    const obj: any = {};
    message.Source !== undefined && (obj.Source = message.Source);
    message.MimeType !== undefined && (obj.MimeType = message.MimeType);
    return obj;
  },

  fromPartial(object: DeepPartial<Link>): Link {
    const message = { ...baseLink } as Link;
    if (object.Source !== undefined && object.Source !== null) {
      message.Source = object.Source;
    } else {
      message.Source = "";
    }
    if (object.MimeType !== undefined && object.MimeType !== null) {
      message.MimeType = object.MimeType;
    } else {
      message.MimeType = "";
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
