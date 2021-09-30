/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primatives/address";

export const protobufPackage = "metadata";

export interface fungibleTokenGate {
  address: address | undefined;
  requiredBalance: string;
}

const basefungibleTokenGate: object = { requiredBalance: "" };

export const fungibleTokenGate = {
  encode(
    message: fungibleTokenGate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== undefined) {
      address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.requiredBalance !== "") {
      writer.uint32(18).string(message.requiredBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): fungibleTokenGate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basefungibleTokenGate } as fungibleTokenGate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = address.decode(reader, reader.uint32());
          break;
        case 2:
          message.requiredBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): fungibleTokenGate {
    const message = { ...basefungibleTokenGate } as fungibleTokenGate;
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    if (
      object.requiredBalance !== undefined &&
      object.requiredBalance !== null
    ) {
      message.requiredBalance = String(object.requiredBalance);
    } else {
      message.requiredBalance = "";
    }
    return message;
  },

  toJSON(message: fungibleTokenGate): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? address.toJSON(message.address)
        : undefined);
    message.requiredBalance !== undefined &&
      (obj.requiredBalance = message.requiredBalance);
    return obj;
  },

  fromPartial(object: DeepPartial<fungibleTokenGate>): fungibleTokenGate {
    const message = { ...basefungibleTokenGate } as fungibleTokenGate;
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (
      object.requiredBalance !== undefined &&
      object.requiredBalance !== null
    ) {
      message.requiredBalance = object.requiredBalance;
    } else {
      message.requiredBalance = "";
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
