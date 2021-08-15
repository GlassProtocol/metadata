/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { VideoData } from "./VideoData";

export const protobufPackage = "metadata";

export interface VideoMetadata {
  Version: string;
  Data: VideoData | undefined;
  Signatures: string[];
}

const baseVideoMetadata: object = { Version: "", Signatures: "" };

export const VideoMetadata = {
  encode(message: VideoMetadata, writer: Writer = Writer.create()): Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }
    if (message.Data !== undefined) {
      VideoData.encode(message.Data, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.Signatures) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VideoMetadata {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVideoMetadata } as VideoMetadata;
    message.Signatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Version = reader.string();
          break;
        case 2:
          message.Data = VideoData.decode(reader, reader.uint32());
          break;
        case 3:
          message.Signatures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoMetadata {
    const message = { ...baseVideoMetadata } as VideoMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = String(object.Version);
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = VideoData.fromJSON(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: VideoMetadata): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = message.Version);
    message.Data !== undefined &&
      (obj.Data = message.Data ? VideoData.toJSON(message.Data) : undefined);
    if (message.Signatures) {
      obj.Signatures = message.Signatures.map((e) => e);
    } else {
      obj.Signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VideoMetadata>): VideoMetadata {
    const message = { ...baseVideoMetadata } as VideoMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = object.Version;
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = VideoData.fromPartial(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(e);
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
