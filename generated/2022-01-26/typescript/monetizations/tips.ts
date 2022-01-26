/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface tips {
  network: network;
  address: address | undefined;
}

const basetips: object = { network: 0 };

export const tips = {
  encode(message: tips, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.address !== undefined) {
      address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): tips {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basetips } as tips;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.address = address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): tips {
    const message = { ...basetips } as tips;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    return message;
  },

  toJSON(message: tips): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.address !== undefined &&
      (obj.address = message.address
        ? address.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<tips>): tips {
    const message = { ...basetips } as tips;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromPartial(object.address);
    } else {
      message.address = undefined;
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
