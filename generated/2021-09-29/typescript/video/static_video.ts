/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { fungibleTokenGate } from "../monetizations/fungible_token_gate";

export const protobufPackage = "metadata";

export interface staticVideo {
  loop: boolean;
  audio: boolean;
  tips: tips | undefined;
  fungibleTokenGate: fungibleTokenGate | undefined;
}

const basestaticVideo: object = { loop: false, audio: false };

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
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(26).fork()).ldelim();
    }
    if (message.fungibleTokenGate !== undefined) {
      fungibleTokenGate
        .encode(message.fungibleTokenGate, writer.uint32(34).fork())
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
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 4:
          message.fungibleTokenGate = fungibleTokenGate.decode(
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
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromJSON(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.fungibleTokenGate !== undefined &&
      object.fungibleTokenGate !== null
    ) {
      message.fungibleTokenGate = fungibleTokenGate.fromJSON(
        object.fungibleTokenGate
      );
    } else {
      message.fungibleTokenGate = undefined;
    }
    return message;
  },

  toJSON(message: staticVideo): unknown {
    const obj: any = {};
    message.loop !== undefined && (obj.loop = message.loop);
    message.audio !== undefined && (obj.audio = message.audio);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.fungibleTokenGate !== undefined &&
      (obj.fungibleTokenGate = message.fungibleTokenGate
        ? fungibleTokenGate.toJSON(message.fungibleTokenGate)
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
    if (object.tips !== undefined && object.tips !== null) {
      message.tips = tips.fromPartial(object.tips);
    } else {
      message.tips = undefined;
    }
    if (
      object.fungibleTokenGate !== undefined &&
      object.fungibleTokenGate !== null
    ) {
      message.fungibleTokenGate = fungibleTokenGate.fromPartial(
        object.fungibleTokenGate
      );
    } else {
      message.fungibleTokenGate = undefined;
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
