/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { thumbnail } from "../video/thumbnail";
import { link } from "../primatives/link";
import { static } from "../video/static";
import { stream } from "../video/stream";

export const protobufPackage = "metadata";

export interface videoMetadata {
  creatorDid: string;
  createdTime: number;
  title: string;
  description: string;
  thumbnails: thumbnail[];
  videoSource: link | undefined;
  static: static | undefined;
  stream: stream | undefined;
}

const basevideoMetadata: object = {
  creatorDid: "",
  createdTime: 0,
  title: "",
  description: "",
};

export const videoMetadata = {
  encode(
    message: videoMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }
    if (message.createdTime !== 0) {
      writer.uint32(16).int64(message.createdTime);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.thumbnails) {
      thumbnail.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.videoSource !== undefined) {
      link.encode(message.videoSource, writer.uint32(50).fork()).ldelim();
    }
    if (message.static !== undefined) {
      static.encode(message.static, writer.uint32(58).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      stream.encode(message.stream, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): videoMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basevideoMetadata } as videoMetadata;
    message.thumbnails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;
        case 2:
          message.createdTime = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.thumbnails.push(thumbnail.decode(reader, reader.uint32()));
          break;
        case 6:
          message.videoSource = link.decode(reader, reader.uint32());
          break;
        case 7:
          message.static = static.decode(reader, reader.uint32());
          break;
        case 8:
          message.stream = stream.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): videoMetadata {
    const message = { ...basevideoMetadata } as videoMetadata;
    message.thumbnails = [];
    if (object.creatorDid !== undefined && object.creatorDid !== null) {
      message.creatorDid = String(object.creatorDid);
    } else {
      message.creatorDid = "";
    }
    if (object.createdTime !== undefined && object.createdTime !== null) {
      message.createdTime = Number(object.createdTime);
    } else {
      message.createdTime = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.thumbnails !== undefined && object.thumbnails !== null) {
      for (const e of object.thumbnails) {
        message.thumbnails.push(thumbnail.fromJSON(e));
      }
    }
    if (object.videoSource !== undefined && object.videoSource !== null) {
      message.videoSource = link.fromJSON(object.videoSource);
    } else {
      message.videoSource = undefined;
    }
    if (object.static !== undefined && object.static !== null) {
      message.static = static.fromJSON(object.static);
    } else {
      message.static = undefined;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = stream.fromJSON(object.stream);
    } else {
      message.stream = undefined;
    }
    return message;
  },

  toJSON(message: videoMetadata): unknown {
    const obj: any = {};
    message.creatorDid !== undefined && (obj.creatorDid = message.creatorDid);
    message.createdTime !== undefined &&
      (obj.createdTime = message.createdTime);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.thumbnails) {
      obj.thumbnails = message.thumbnails.map((e) =>
        e ? thumbnail.toJSON(e) : undefined
      );
    } else {
      obj.thumbnails = [];
    }
    message.videoSource !== undefined &&
      (obj.videoSource = message.videoSource
        ? link.toJSON(message.videoSource)
        : undefined);
    message.static !== undefined &&
      (obj.static = message.static ? static.toJSON(message.static) : undefined);
    message.stream !== undefined &&
      (obj.stream = message.stream ? stream.toJSON(message.stream) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<videoMetadata>): videoMetadata {
    const message = { ...basevideoMetadata } as videoMetadata;
    message.thumbnails = [];
    if (object.creatorDid !== undefined && object.creatorDid !== null) {
      message.creatorDid = object.creatorDid;
    } else {
      message.creatorDid = "";
    }
    if (object.createdTime !== undefined && object.createdTime !== null) {
      message.createdTime = object.createdTime;
    } else {
      message.createdTime = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.thumbnails !== undefined && object.thumbnails !== null) {
      for (const e of object.thumbnails) {
        message.thumbnails.push(thumbnail.fromPartial(e));
      }
    }
    if (object.videoSource !== undefined && object.videoSource !== null) {
      message.videoSource = link.fromPartial(object.videoSource);
    } else {
      message.videoSource = undefined;
    }
    if (object.static !== undefined && object.static !== null) {
      message.static = static.fromPartial(object.static);
    } else {
      message.static = undefined;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = stream.fromPartial(object.stream);
    } else {
      message.stream = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
