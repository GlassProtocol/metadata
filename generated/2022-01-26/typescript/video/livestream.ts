/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { fungible_token_gate } from "../monetizations/fungible_token_gate";

export const protobufPackage = "metadata";

export interface livestream {
  stream_id: string;
  session_id: string;
  scheduled_time: number;
  tips: tips | undefined;
  fungible_token_gate: fungible_token_gate | undefined;
}

const baselivestream: object = {
  stream_id: "",
  session_id: "",
  scheduled_time: 0,
};

export const livestream = {
  encode(
    message: livestream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stream_id !== "") {
      writer.uint32(10).string(message.stream_id);
    }
    if (message.session_id !== "") {
      writer.uint32(18).string(message.session_id);
    }
    if (message.scheduled_time !== 0) {
      writer.uint32(40).int64(message.scheduled_time);
    }
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(810).fork()).ldelim();
    }
    if (message.fungible_token_gate !== undefined) {
      fungible_token_gate
        .encode(message.fungible_token_gate, writer.uint32(818).fork())
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
          message.stream_id = reader.string();
          break;
        case 2:
          message.session_id = reader.string();
          break;
        case 5:
          message.scheduled_time = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 102:
          message.fungible_token_gate = fungible_token_gate.decode(
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
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.stream_id = String(object.stream_id);
    } else {
      message.stream_id = "";
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.session_id = String(object.session_id);
    } else {
      message.session_id = "";
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
      object.fungible_token_gate !== undefined &&
      object.fungible_token_gate !== null
    ) {
      message.fungible_token_gate = fungible_token_gate.fromJSON(
        object.fungible_token_gate
      );
    } else {
      message.fungible_token_gate = undefined;
    }
    return message;
  },

  toJSON(message: livestream): unknown {
    const obj: any = {};
    message.stream_id !== undefined && (obj.stream_id = message.stream_id);
    message.session_id !== undefined && (obj.session_id = message.session_id);
    message.scheduled_time !== undefined &&
      (obj.scheduled_time = message.scheduled_time);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.fungible_token_gate !== undefined &&
      (obj.fungible_token_gate = message.fungible_token_gate
        ? fungible_token_gate.toJSON(message.fungible_token_gate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<livestream>): livestream {
    const message = { ...baselivestream } as livestream;
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.stream_id = object.stream_id;
    } else {
      message.stream_id = "";
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.session_id = object.session_id;
    } else {
      message.session_id = "";
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
      object.fungible_token_gate !== undefined &&
      object.fungible_token_gate !== null
    ) {
      message.fungible_token_gate = fungible_token_gate.fromPartial(
        object.fungible_token_gate
      );
    } else {
      message.fungible_token_gate = undefined;
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
