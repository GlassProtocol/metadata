/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { thumbnail } from "../primitives/thumbnail";
import { link } from "../primitives/link";
import { static_video } from "../video/static_video";
import { livestream } from "../video/livestream";

export const protobufPackage = "metadata";

export interface video_metadata {
  created_time: number;
  title: string;
  description: string;
  thumbnails: thumbnail[];
  video_source: link | undefined;
  static_video: static_video | undefined;
  livestream: livestream | undefined;
}

const basevideo_metadata: object = {
  created_time: 0,
  title: "",
  description: "",
};

export const video_metadata = {
  encode(
    message: video_metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.created_time !== 0) {
      writer.uint32(8).int64(message.created_time);
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
    if (message.video_source !== undefined) {
      link.encode(message.video_source, writer.uint32(42).fork()).ldelim();
    }
    if (message.static_video !== undefined) {
      static_video
        .encode(message.static_video, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.livestream !== undefined) {
      livestream.encode(message.livestream, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): video_metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basevideo_metadata } as video_metadata;
    message.thumbnails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created_time = longToNumber(reader.int64() as Long);
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
          message.video_source = link.decode(reader, reader.uint32());
          break;
        case 6:
          message.static_video = static_video.decode(reader, reader.uint32());
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

  fromJSON(object: any): video_metadata {
    const message = { ...basevideo_metadata } as video_metadata;
    message.thumbnails = [];
    if (object.created_time !== undefined && object.created_time !== null) {
      message.created_time = Number(object.created_time);
    } else {
      message.created_time = 0;
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
    if (object.video_source !== undefined && object.video_source !== null) {
      message.video_source = link.fromJSON(object.video_source);
    } else {
      message.video_source = undefined;
    }
    if (object.static_video !== undefined && object.static_video !== null) {
      message.static_video = static_video.fromJSON(object.static_video);
    } else {
      message.static_video = undefined;
    }
    if (object.livestream !== undefined && object.livestream !== null) {
      message.livestream = livestream.fromJSON(object.livestream);
    } else {
      message.livestream = undefined;
    }
    return message;
  },

  toJSON(message: video_metadata): unknown {
    const obj: any = {};
    message.created_time !== undefined &&
      (obj.created_time = message.created_time);
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
    message.video_source !== undefined &&
      (obj.video_source = message.video_source
        ? link.toJSON(message.video_source)
        : undefined);
    message.static_video !== undefined &&
      (obj.static_video = message.static_video
        ? static_video.toJSON(message.static_video)
        : undefined);
    message.livestream !== undefined &&
      (obj.livestream = message.livestream
        ? livestream.toJSON(message.livestream)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<video_metadata>): video_metadata {
    const message = { ...basevideo_metadata } as video_metadata;
    message.thumbnails = [];
    if (object.created_time !== undefined && object.created_time !== null) {
      message.created_time = object.created_time;
    } else {
      message.created_time = 0;
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
    if (object.video_source !== undefined && object.video_source !== null) {
      message.video_source = link.fromPartial(object.video_source);
    } else {
      message.video_source = undefined;
    }
    if (object.static_video !== undefined && object.static_video !== null) {
      message.static_video = static_video.fromPartial(object.static_video);
    } else {
      message.static_video = undefined;
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
