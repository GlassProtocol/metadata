/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { linked_editions } from "../monetizations/linked_editions";
import { monocollection_editions } from "../monetizations/monocollection_editions";
import { erc721_reserve_auction } from "../monetizations/erc721_reserve_auction";
import { zora_auction } from "../monetizations/zora_auction";
import { media_market } from "../monetizations/media_market";

export const protobufPackage = "metadata";

export interface static_video {
  loop: boolean;
  audio: boolean;
  height: number;
  width: number;
  scheduled_time: number;
  tips: tips | undefined;
  linked_editions: linked_editions | undefined;
  monocollection_editions: monocollection_editions | undefined;
  erc721_reserve_auction: erc721_reserve_auction | undefined;
  zora_auction: zora_auction | undefined;
  media_market: media_market | undefined;
}

const basestatic_video: object = {
  loop: false,
  audio: false,
  height: 0,
  width: 0,
  scheduled_time: 0,
};

export const static_video = {
  encode(
    message: static_video,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loop === true) {
      writer.uint32(8).bool(message.loop);
    }
    if (message.audio === true) {
      writer.uint32(16).bool(message.audio);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    if (message.width !== 0) {
      writer.uint32(32).uint32(message.width);
    }
    if (message.scheduled_time !== 0) {
      writer.uint32(40).int64(message.scheduled_time);
    }
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(810).fork()).ldelim();
    }
    if (message.linked_editions !== undefined) {
      linked_editions
        .encode(message.linked_editions, writer.uint32(818).fork())
        .ldelim();
    }
    if (message.monocollection_editions !== undefined) {
      monocollection_editions
        .encode(message.monocollection_editions, writer.uint32(826).fork())
        .ldelim();
    }
    if (message.erc721_reserve_auction !== undefined) {
      erc721_reserve_auction
        .encode(message.erc721_reserve_auction, writer.uint32(834).fork())
        .ldelim();
    }
    if (message.zora_auction !== undefined) {
      zora_auction
        .encode(message.zora_auction, writer.uint32(842).fork())
        .ldelim();
    }
    if (message.media_market !== undefined) {
      media_market
        .encode(message.media_market, writer.uint32(850).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): static_video {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basestatic_video } as static_video;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loop = reader.bool();
          break;
        case 2:
          message.audio = reader.bool();
          break;
        case 3:
          message.height = reader.uint32();
          break;
        case 4:
          message.width = reader.uint32();
          break;
        case 5:
          message.scheduled_time = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 102:
          message.linked_editions = linked_editions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.monocollection_editions = monocollection_editions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.erc721_reserve_auction = erc721_reserve_auction.decode(
            reader,
            reader.uint32()
          );
          break;
        case 105:
          message.zora_auction = zora_auction.decode(reader, reader.uint32());
          break;
        case 106:
          message.media_market = media_market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): static_video {
    const message = { ...basestatic_video } as static_video;
    if (object.loop !== undefined && object.loop !== null) {
      message.loop = Boolean(object.loop);
    } else {
      message.loop = false;
    }
    if (object.audio !== undefined && object.audio !== null) {
      message.audio = Boolean(object.audio);
    } else {
      message.audio = false;
    }
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
    if (object.scheduled_time !== undefined && object.scheduled_time !== null) {
      message.scheduled_time = Number(object.scheduled_time);
    } else {
      message.scheduled_time = 0;
    }
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromJSON(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.linked_editions !== undefined &&
      object.linked_editions !== null
    ) {
      message.linked_editions = linked_editions.fromJSON(
        object.linked_editions
      );
    } else {
      message.linked_editions = undefined;
    }
    if (
      object.monocollection_editions !== undefined &&
      object.monocollection_editions !== null
    ) {
      message.monocollection_editions = monocollection_editions.fromJSON(
        object.monocollection_editions
      );
    } else {
      message.monocollection_editions = undefined;
    }
    if (
      object.erc721_reserve_auction !== undefined &&
      object.erc721_reserve_auction !== null
    ) {
      message.erc721_reserve_auction = erc721_reserve_auction.fromJSON(
        object.erc721_reserve_auction
      );
    } else {
      message.erc721_reserve_auction = undefined;
    }
    if (object.zora_auction !== undefined && object.zora_auction !== null) {
      message.zora_auction = zora_auction.fromJSON(object.zora_auction);
    } else {
      message.zora_auction = undefined;
    }
    if (object.media_market !== undefined && object.media_market !== null) {
      message.media_market = media_market.fromJSON(object.media_market);
    } else {
      message.media_market = undefined;
    }
    return message;
  },

  toJSON(message: static_video): unknown {
    const obj: any = {};
    message.loop !== undefined && (obj.loop = message.loop);
    message.audio !== undefined && (obj.audio = message.audio);
    message.height !== undefined && (obj.height = message.height);
    message.width !== undefined && (obj.width = message.width);
    message.scheduled_time !== undefined &&
      (obj.scheduled_time = message.scheduled_time);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.linked_editions !== undefined &&
      (obj.linked_editions = message.linked_editions
        ? linked_editions.toJSON(message.linked_editions)
        : undefined);
    message.monocollection_editions !== undefined &&
      (obj.monocollection_editions = message.monocollection_editions
        ? monocollection_editions.toJSON(message.monocollection_editions)
        : undefined);
    message.erc721_reserve_auction !== undefined &&
      (obj.erc721_reserve_auction = message.erc721_reserve_auction
        ? erc721_reserve_auction.toJSON(message.erc721_reserve_auction)
        : undefined);
    message.zora_auction !== undefined &&
      (obj.zora_auction = message.zora_auction
        ? zora_auction.toJSON(message.zora_auction)
        : undefined);
    message.media_market !== undefined &&
      (obj.media_market = message.media_market
        ? media_market.toJSON(message.media_market)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<static_video>): static_video {
    const message = { ...basestatic_video } as static_video;
    if (object.loop !== undefined && object.loop !== null) {
      message.loop = object.loop;
    } else {
      message.loop = false;
    }
    if (object.audio !== undefined && object.audio !== null) {
      message.audio = object.audio;
    } else {
      message.audio = false;
    }
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
    if (object.scheduled_time !== undefined && object.scheduled_time !== null) {
      message.scheduled_time = object.scheduled_time;
    } else {
      message.scheduled_time = 0;
    }
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromPartial(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.linked_editions !== undefined &&
      object.linked_editions !== null
    ) {
      message.linked_editions = linked_editions.fromPartial(
        object.linked_editions
      );
    } else {
      message.linked_editions = undefined;
    }
    if (
      object.monocollection_editions !== undefined &&
      object.monocollection_editions !== null
    ) {
      message.monocollection_editions = monocollection_editions.fromPartial(
        object.monocollection_editions
      );
    } else {
      message.monocollection_editions = undefined;
    }
    if (
      object.erc721_reserve_auction !== undefined &&
      object.erc721_reserve_auction !== null
    ) {
      message.erc721_reserve_auction = erc721_reserve_auction.fromPartial(
        object.erc721_reserve_auction
      );
    } else {
      message.erc721_reserve_auction = undefined;
    }
    if (object.zora_auction !== undefined && object.zora_auction !== null) {
      message.zora_auction = zora_auction.fromPartial(object.zora_auction);
    } else {
      message.zora_auction = undefined;
    }
    if (object.media_market !== undefined && object.media_market !== null) {
      message.media_market = media_market.fromPartial(object.media_market);
    } else {
      message.media_market = undefined;
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
