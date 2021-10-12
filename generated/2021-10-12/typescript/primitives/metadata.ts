/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { signature } from "../primitives/signature";
import { videoMetadata } from "../video/video_metadata";

export const protobufPackage = "metadata";

export interface metadata {
  /** version number */
  version: string;
  did: string;
  signature: signature | undefined;
  video: videoMetadata | undefined;
}

const basemetadata: object = { version: "", did: "" };

export const metadata = {
  encode(
    message: metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.signature !== undefined) {
      signature.encode(message.signature, writer.uint32(26).fork()).ldelim();
    }
    if (message.video !== undefined) {
      videoMetadata.encode(message.video, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basemetadata } as metadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.signature = signature.decode(reader, reader.uint32());
          break;
        case 4:
          message.video = videoMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): metadata {
    const message = { ...basemetadata } as metadata;
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = signature.fromJSON(object.signature);
    } else {
      message.signature = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = videoMetadata.fromJSON(object.video);
    } else {
      message.video = undefined;
    }
    return message;
  },

  toJSON(message: metadata): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.did !== undefined && (obj.did = message.did);
    message.signature !== undefined &&
      (obj.signature = message.signature
        ? signature.toJSON(message.signature)
        : undefined);
    message.video !== undefined &&
      (obj.video = message.video
        ? videoMetadata.toJSON(message.video)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<metadata>): metadata {
    const message = { ...basemetadata } as metadata;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = signature.fromPartial(object.signature);
    } else {
      message.signature = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = videoMetadata.fromPartial(object.video);
    } else {
      message.video = undefined;
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
