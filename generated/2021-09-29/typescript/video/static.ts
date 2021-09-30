/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface static {
  loop: boolean;
  audio: boolean;
  static: static | undefined;
}

const basestatic: object = { loop: false, audio: false };

export const static = {
  encode(
    message: static,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loop === true) {
      writer.uint32(8).bool(message.loop);
    }
    if (message.audio === true) {
      writer.uint32(16).bool(message.audio);
    }
    if (message.static !== undefined) {
      static.encode(message.static, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): static {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basestatic } as static;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loop = reader.bool();
          break;
        case 2:
          message.audio = reader.bool();
          break;
        case 7:
          message.static = static.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): static {
    const message = { ...basestatic } as static;
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
    if (object.static !== undefined && object.static !== null) {
      message.static = static.fromJSON(object.static);
    } else {
      message.static = undefined;
    }
    return message;
  },

  toJSON(message: static): unknown {
    const obj: any = {};
    message.loop !== undefined && (obj.loop = message.loop);
    message.audio !== undefined && (obj.audio = message.audio);
    message.static !== undefined &&
      (obj.static = message.static ? static.toJSON(message.static) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<static>): static {
    const message = { ...basestatic } as static;
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
    if (object.static !== undefined && object.static !== null) {
      message.static = static.fromPartial(object.static);
    } else {
      message.static = undefined;
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
