/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { chainedEditions } from "../monetizations/chained_editions";
import { monocollectionEditions } from "../monetizations/monocollection_editions";
import { erc721ReserveAuction } from "../monetizations/erc721_reserve_auction";

export const protobufPackage = "metadata";

export interface staticVideo {
  loop: boolean;
  audio: boolean;
  height: number;
  width: number;
  tips: tips | undefined;
  chainedEditions: chainedEditions | undefined;
  monocollectionEditions: monocollectionEditions | undefined;
  erc721ReserveAuction: erc721ReserveAuction | undefined;
}

const basestaticVideo: object = {
  loop: false,
  audio: false,
  height: 0,
  width: 0,
};

export const staticVideo = {
  encode(
    message: staticVideo,
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
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(810).fork()).ldelim();
    }
    if (message.chainedEditions !== undefined) {
      chainedEditions
        .encode(message.chainedEditions, writer.uint32(818).fork())
        .ldelim();
    }
    if (message.monocollectionEditions !== undefined) {
      monocollectionEditions
        .encode(message.monocollectionEditions, writer.uint32(826).fork())
        .ldelim();
    }
    if (message.erc721ReserveAuction !== undefined) {
      erc721ReserveAuction
        .encode(message.erc721ReserveAuction, writer.uint32(834).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): staticVideo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basestaticVideo } as staticVideo;
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
        case 101:
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 102:
          message.chainedEditions = chainedEditions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.monocollectionEditions = monocollectionEditions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.erc721ReserveAuction = erc721ReserveAuction.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): staticVideo {
    const message = { ...basestaticVideo } as staticVideo;
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
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromJSON(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.chainedEditions !== undefined &&
      object.chainedEditions !== null
    ) {
      message.chainedEditions = chainedEditions.fromJSON(
        object.chainedEditions
      );
    } else {
      message.chainedEditions = undefined;
    }
    if (
      object.monocollectionEditions !== undefined &&
      object.monocollectionEditions !== null
    ) {
      message.monocollectionEditions = monocollectionEditions.fromJSON(
        object.monocollectionEditions
      );
    } else {
      message.monocollectionEditions = undefined;
    }
    if (
      object.erc721ReserveAuction !== undefined &&
      object.erc721ReserveAuction !== null
    ) {
      message.erc721ReserveAuction = erc721ReserveAuction.fromJSON(
        object.erc721ReserveAuction
      );
    } else {
      message.erc721ReserveAuction = undefined;
    }
    return message;
  },

  toJSON(message: staticVideo): unknown {
    const obj: any = {};
    message.loop !== undefined && (obj.loop = message.loop);
    message.audio !== undefined && (obj.audio = message.audio);
    message.height !== undefined && (obj.height = message.height);
    message.width !== undefined && (obj.width = message.width);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.chainedEditions !== undefined &&
      (obj.chainedEditions = message.chainedEditions
        ? chainedEditions.toJSON(message.chainedEditions)
        : undefined);
    message.monocollectionEditions !== undefined &&
      (obj.monocollectionEditions = message.monocollectionEditions
        ? monocollectionEditions.toJSON(message.monocollectionEditions)
        : undefined);
    message.erc721ReserveAuction !== undefined &&
      (obj.erc721ReserveAuction = message.erc721ReserveAuction
        ? erc721ReserveAuction.toJSON(message.erc721ReserveAuction)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<staticVideo>): staticVideo {
    const message = { ...basestaticVideo } as staticVideo;
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
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromPartial(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.chainedEditions !== undefined &&
      object.chainedEditions !== null
    ) {
      message.chainedEditions = chainedEditions.fromPartial(
        object.chainedEditions
      );
    } else {
      message.chainedEditions = undefined;
    }
    if (
      object.monocollectionEditions !== undefined &&
      object.monocollectionEditions !== null
    ) {
      message.monocollectionEditions = monocollectionEditions.fromPartial(
        object.monocollectionEditions
      );
    } else {
      message.monocollectionEditions = undefined;
    }
    if (
      object.erc721ReserveAuction !== undefined &&
      object.erc721ReserveAuction !== null
    ) {
      message.erc721ReserveAuction = erc721ReserveAuction.fromPartial(
        object.erc721ReserveAuction
      );
    } else {
      message.erc721ReserveAuction = undefined;
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
