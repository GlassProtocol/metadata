/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  protocol,
  protocolFromJSON,
  protocolToJSON,
} from "../primitives/protocol";

export const protobufPackage = "metadata";

export interface address {
  address: string;
  protocol: protocol;
}

const baseaddress: object = { address: "", protocol: 0 };

export const address = {
  encode(
    message: address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.protocol !== 0) {
      writer.uint32(16).int32(message.protocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseaddress } as address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.protocol = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): address {
    const message = { ...baseaddress } as address;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = protocolFromJSON(object.protocol);
    } else {
      message.protocol = 0;
    }
    return message;
  },

  toJSON(message: address): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.protocol !== undefined &&
      (obj.protocol = protocolToJSON(message.protocol));
    return obj;
  },

  fromPartial(object: DeepPartial<address>): address {
    const message = { ...baseaddress } as address;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    } else {
      message.protocol = 0;
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
