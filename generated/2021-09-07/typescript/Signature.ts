/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Address } from "./Address";

export const protobufPackage = "metadata";

export interface Signature {
  SigningAddress: Address | undefined;
  Signature: string;
}

const baseSignature: object = { Signature: "" };

export const Signature = {
  encode(
    message: Signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.SigningAddress !== undefined) {
      Address.encode(message.SigningAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.Signature !== "") {
      writer.uint32(18).string(message.Signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignature } as Signature;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SigningAddress = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.Signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signature {
    const message = { ...baseSignature } as Signature;
    if (object.SigningAddress !== undefined && object.SigningAddress !== null) {
      message.SigningAddress = Address.fromJSON(object.SigningAddress);
    } else {
      message.SigningAddress = undefined;
    }
    if (object.Signature !== undefined && object.Signature !== null) {
      message.Signature = String(object.Signature);
    } else {
      message.Signature = "";
    }
    return message;
  },

  toJSON(message: Signature): unknown {
    const obj: any = {};
    message.SigningAddress !== undefined &&
      (obj.SigningAddress = message.SigningAddress
        ? Address.toJSON(message.SigningAddress)
        : undefined);
    message.Signature !== undefined && (obj.Signature = message.Signature);
    return obj;
  },

  fromPartial(object: DeepPartial<Signature>): Signature {
    const message = { ...baseSignature } as Signature;
    if (object.SigningAddress !== undefined && object.SigningAddress !== null) {
      message.SigningAddress = Address.fromPartial(object.SigningAddress);
    } else {
      message.SigningAddress = undefined;
    }
    if (object.Signature !== undefined && object.Signature !== null) {
      message.Signature = object.Signature;
    } else {
      message.Signature = "";
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
