/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { fungibleTokenGate } from "../monetizations/fungible_token_gate";

export const protobufPackage = "metadata";

export interface livestream {
  streamId: string;
  sessionId: string;
  scheduledTime: number;
  tips: tips | undefined;
  fungibleTokenGate: fungibleTokenGate | undefined;
}

const baselivestream: object = {
  streamId: "",
  sessionId: "",
  scheduledTime: 0,
};

export const livestream = {
  encode(
    message: livestream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.scheduledTime !== 0) {
      writer.uint32(40).int64(message.scheduledTime);
    }
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(810).fork()).ldelim();
    }
    if (message.fungibleTokenGate !== undefined) {
      fungibleTokenGate
        .encode(message.fungibleTokenGate, writer.uint32(818).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): livestream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baselivestream } as livestream;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 5:
          message.scheduledTime = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 102:
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

  fromJSON(object: any): livestream {
    const message = { ...baselivestream } as livestream;
    if (object.streamId !== undefined && object.streamId !== null) {
      message.streamId = String(object.streamId);
    } else {
      message.streamId = "";
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = String(object.sessionId);
    } else {
      message.sessionId = "";
    }
    if (object.scheduledTime !== undefined && object.scheduledTime !== null) {
      message.scheduledTime = Number(object.scheduledTime);
    } else {
      message.scheduledTime = 0;
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

  toJSON(message: livestream): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.scheduledTime !== undefined &&
      (obj.scheduledTime = message.scheduledTime);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.fungibleTokenGate !== undefined &&
      (obj.fungibleTokenGate = message.fungibleTokenGate
        ? fungibleTokenGate.toJSON(message.fungibleTokenGate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<livestream>): livestream {
    const message = { ...baselivestream } as livestream;
    if (object.streamId !== undefined && object.streamId !== null) {
      message.streamId = object.streamId;
    } else {
      message.streamId = "";
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    if (object.scheduledTime !== undefined && object.scheduledTime !== null) {
      message.scheduledTime = object.scheduledTime;
    } else {
      message.scheduledTime = 0;
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
