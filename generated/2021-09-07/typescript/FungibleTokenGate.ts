/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface FungibleTokenGate {
  TokenAddress: string;
  Quantity: string;
}

const baseFungibleTokenGate: object = { TokenAddress: "", Quantity: "" };

export const FungibleTokenGate = {
  encode(
    message: FungibleTokenGate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.TokenAddress !== "") {
      writer.uint32(10).string(message.TokenAddress);
    }
    if (message.Quantity !== "") {
      writer.uint32(18).string(message.Quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenGate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFungibleTokenGate } as FungibleTokenGate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TokenAddress = reader.string();
          break;
        case 2:
          message.Quantity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FungibleTokenGate {
    const message = { ...baseFungibleTokenGate } as FungibleTokenGate;
    if (object.TokenAddress !== undefined && object.TokenAddress !== null) {
      message.TokenAddress = String(object.TokenAddress);
    } else {
      message.TokenAddress = "";
    }
    if (object.Quantity !== undefined && object.Quantity !== null) {
      message.Quantity = String(object.Quantity);
    } else {
      message.Quantity = "";
    }
    return message;
  },

  toJSON(message: FungibleTokenGate): unknown {
    const obj: any = {};
    message.TokenAddress !== undefined &&
      (obj.TokenAddress = message.TokenAddress);
    message.Quantity !== undefined && (obj.Quantity = message.Quantity);
    return obj;
  },

  fromPartial(object: DeepPartial<FungibleTokenGate>): FungibleTokenGate {
    const message = { ...baseFungibleTokenGate } as FungibleTokenGate;
    if (object.TokenAddress !== undefined && object.TokenAddress !== null) {
      message.TokenAddress = object.TokenAddress;
    } else {
      message.TokenAddress = "";
    }
    if (object.Quantity !== undefined && object.Quantity !== null) {
      message.Quantity = object.Quantity;
    } else {
      message.Quantity = "";
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
