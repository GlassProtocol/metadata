/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { thumbnail } from "../video/thumbnail";
import { link } from "../primitives/link";
import { staticVideo } from "../video/static_video";
import { livestream } from "../video/livestream";

export const protobufPackage = "metadata";

export interface videoMetadata {
  createdTime: number;
  title: string;
  description: string;
  thumbnails: thumbnail[];
  videoSource: link | undefined;
  staticVideo: staticVideo | undefined;
  livestream: livestream | undefined;
}

const basevideoMetadata: object = {
  createdTime: 0,
  title: "",
  description: "",
};

export const videoMetadata = {
  encode(
    message: videoMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createdTime !== 0) {
      writer.uint32(8).int64(message.createdTime);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.thumbnails) {
      thumbnail.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.videoSource !== undefined) {
      link.encode(message.videoSource, writer.uint32(42).fork()).ldelim();
    }
    if (message.staticVideo !== undefined) {
      staticVideo
        .encode(message.staticVideo, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.livestream !== undefined) {
      livestream.encode(message.livestream, writer.uint32(58).fork()).ldelim();
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
          message.createdTime = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.thumbnails.push(thumbnail.decode(reader, reader.uint32()));
          break;
        case 5:
          message.videoSource = link.decode(reader, reader.uint32());
          break;
        case 6:
          message.staticVideo = staticVideo.decode(reader, reader.uint32());
          break;
        case 7:
          message.livestream = livestream.decode(reader, reader.uint32());
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
    if (object.staticVideo !== undefined && object.staticVideo !== null) {
      message.staticVideo = staticVideo.fromJSON(object.staticVideo);
    } else {
      message.staticVideo = undefined;
    }
    if (object.livestream !== undefined && object.livestream !== null) {
      message.livestream = livestream.fromJSON(object.livestream);
    } else {
      message.livestream = undefined;
    }
    return message;
  },

  toJSON(message: videoMetadata): unknown {
    const obj: any = {};
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
    message.staticVideo !== undefined &&
      (obj.staticVideo = message.staticVideo
        ? staticVideo.toJSON(message.staticVideo)
        : undefined);
    message.livestream !== undefined &&
      (obj.livestream = message.livestream
        ? livestream.toJSON(message.livestream)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<videoMetadata>): videoMetadata {
    const message = { ...basevideoMetadata } as videoMetadata;
    message.thumbnails = [];
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
    if (object.staticVideo !== undefined && object.staticVideo !== null) {
      message.staticVideo = staticVideo.fromPartial(object.staticVideo);
    } else {
      message.staticVideo = undefined;
    }
    if (object.livestream !== undefined && object.livestream !== null) {
      message.livestream = livestream.fromPartial(object.livestream);
    } else {
      message.livestream = undefined;
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
