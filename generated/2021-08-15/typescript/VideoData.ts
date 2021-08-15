/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Address } from "./Address";
import { Link } from "./Link";
import { Monetization } from "./Monetization";

export const protobufPackage = "metadata";

export interface VideoData {
  CreatorAddress: Address | undefined;
  CreatedDate: string;
  VideoTitle: string;
  VideoDescription: string;
  VideoPoster: Link | undefined;
  VideoData: Link | undefined;
  Monetization: Monetization[];
}

const baseVideoData: object = {
  CreatedDate: "",
  VideoTitle: "",
  VideoDescription: "",
};

export const VideoData = {
  encode(message: VideoData, writer: Writer = Writer.create()): Writer {
    if (message.CreatorAddress !== undefined) {
      Address.encode(message.CreatorAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.CreatedDate !== "") {
      writer.uint32(18).string(message.CreatedDate);
    }
    if (message.VideoTitle !== "") {
      writer.uint32(26).string(message.VideoTitle);
    }
    if (message.VideoDescription !== "") {
      writer.uint32(34).string(message.VideoDescription);
    }
    if (message.VideoPoster !== undefined) {
      Link.encode(message.VideoPoster, writer.uint32(42).fork()).ldelim();
    }
    if (message.VideoData !== undefined) {
      Link.encode(message.VideoData, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.Monetization) {
      Monetization.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VideoData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVideoData } as VideoData;
    message.Monetization = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CreatorAddress = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.CreatedDate = reader.string();
          break;
        case 3:
          message.VideoTitle = reader.string();
          break;
        case 4:
          message.VideoDescription = reader.string();
          break;
        case 5:
          message.VideoPoster = Link.decode(reader, reader.uint32());
          break;
        case 6:
          message.VideoData = Link.decode(reader, reader.uint32());
          break;
        case 7:
          message.Monetization.push(
            Monetization.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoData {
    const message = { ...baseVideoData } as VideoData;
    message.Monetization = [];
    if (object.CreatorAddress !== undefined && object.CreatorAddress !== null) {
      message.CreatorAddress = Address.fromJSON(object.CreatorAddress);
    } else {
      message.CreatorAddress = undefined;
    }
    if (object.CreatedDate !== undefined && object.CreatedDate !== null) {
      message.CreatedDate = String(object.CreatedDate);
    } else {
      message.CreatedDate = "";
    }
    if (object.VideoTitle !== undefined && object.VideoTitle !== null) {
      message.VideoTitle = String(object.VideoTitle);
    } else {
      message.VideoTitle = "";
    }
    if (
      object.VideoDescription !== undefined &&
      object.VideoDescription !== null
    ) {
      message.VideoDescription = String(object.VideoDescription);
    } else {
      message.VideoDescription = "";
    }
    if (object.VideoPoster !== undefined && object.VideoPoster !== null) {
      message.VideoPoster = Link.fromJSON(object.VideoPoster);
    } else {
      message.VideoPoster = undefined;
    }
    if (object.VideoData !== undefined && object.VideoData !== null) {
      message.VideoData = Link.fromJSON(object.VideoData);
    } else {
      message.VideoData = undefined;
    }
    if (object.Monetization !== undefined && object.Monetization !== null) {
      for (const e of object.Monetization) {
        message.Monetization.push(Monetization.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VideoData): unknown {
    const obj: any = {};
    message.CreatorAddress !== undefined &&
      (obj.CreatorAddress = message.CreatorAddress
        ? Address.toJSON(message.CreatorAddress)
        : undefined);
    message.CreatedDate !== undefined &&
      (obj.CreatedDate = message.CreatedDate);
    message.VideoTitle !== undefined && (obj.VideoTitle = message.VideoTitle);
    message.VideoDescription !== undefined &&
      (obj.VideoDescription = message.VideoDescription);
    message.VideoPoster !== undefined &&
      (obj.VideoPoster = message.VideoPoster
        ? Link.toJSON(message.VideoPoster)
        : undefined);
    message.VideoData !== undefined &&
      (obj.VideoData = message.VideoData
        ? Link.toJSON(message.VideoData)
        : undefined);
    if (message.Monetization) {
      obj.Monetization = message.Monetization.map((e) =>
        e ? Monetization.toJSON(e) : undefined
      );
    } else {
      obj.Monetization = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VideoData>): VideoData {
    const message = { ...baseVideoData } as VideoData;
    message.Monetization = [];
    if (object.CreatorAddress !== undefined && object.CreatorAddress !== null) {
      message.CreatorAddress = Address.fromPartial(object.CreatorAddress);
    } else {
      message.CreatorAddress = undefined;
    }
    if (object.CreatedDate !== undefined && object.CreatedDate !== null) {
      message.CreatedDate = object.CreatedDate;
    } else {
      message.CreatedDate = "";
    }
    if (object.VideoTitle !== undefined && object.VideoTitle !== null) {
      message.VideoTitle = object.VideoTitle;
    } else {
      message.VideoTitle = "";
    }
    if (
      object.VideoDescription !== undefined &&
      object.VideoDescription !== null
    ) {
      message.VideoDescription = object.VideoDescription;
    } else {
      message.VideoDescription = "";
    }
    if (object.VideoPoster !== undefined && object.VideoPoster !== null) {
      message.VideoPoster = Link.fromPartial(object.VideoPoster);
    } else {
      message.VideoPoster = undefined;
    }
    if (object.VideoData !== undefined && object.VideoData !== null) {
      message.VideoData = Link.fromPartial(object.VideoData);
    } else {
      message.VideoData = undefined;
    }
    if (object.Monetization !== undefined && object.Monetization !== null) {
      for (const e of object.Monetization) {
        message.Monetization.push(Monetization.fromPartial(e));
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
