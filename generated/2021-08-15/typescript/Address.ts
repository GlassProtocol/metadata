/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Protocol, protocolFromJSON, protocolToJSON } from "./Protocol";

export const protobufPackage = "metadata";

export interface Address {
  Address: string;
  Protocol: Protocol;
}

const baseAddress: object = { Address: "", Protocol: 0 };

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }
    if (message.Protocol !== 0) {
      writer.uint32(16).int32(message.Protocol);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Address = reader.string();
          break;
        case 2:
          message.Protocol = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = String(object.Address);
    } else {
      message.Address = "";
    }
    if (object.Protocol !== undefined && object.Protocol !== null) {
      message.Protocol = protocolFromJSON(object.Protocol);
    } else {
      message.Protocol = 0;
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.Protocol !== undefined &&
      (obj.Protocol = protocolToJSON(message.Protocol));
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = object.Address;
    } else {
      message.Address = "";
    }
    if (object.Protocol !== undefined && object.Protocol !== null) {
      message.Protocol = object.Protocol;
    } else {
      message.Protocol = 0;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
