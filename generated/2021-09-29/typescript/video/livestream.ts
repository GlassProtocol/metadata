/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { tips } from "../monetizations/tips";
import { chainedEditions } from "../monetizations/chained_editions";

export const protobufPackage = "metadata";

export interface livestream {
  streamId: string;
  sessionId: string;
  tips: tips | undefined;
  chainedEditions: chainedEditions | undefined;
}

const baselivestream: object = { streamId: "", sessionId: "" };

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
    if (message.tips !== undefined) {
      tips.encode(message.tips, writer.uint32(26).fork()).ldelim();
    }
    if (message.chainedEditions !== undefined) {
      chainedEditions
        .encode(message.chainedEditions, writer.uint32(34).fork())
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
        case 3:
          message.tips = tips.decode(reader, reader.uint32());
          break;
        case 4:
          message.chainedEditions = chainedEditions.decode(
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
    return message;
  },

  toJSON(message: livestream): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.tips !== undefined &&
      (obj.tips = message.tips ? tips.toJSON(message.tips) : undefined);
    message.chainedEditions !== undefined &&
      (obj.chainedEditions = message.chainedEditions
        ? chainedEditions.toJSON(message.chainedEditions)
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
