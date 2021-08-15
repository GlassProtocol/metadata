/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Protocol } from "./Protocol";

export const protobufPackage = "metadata";

export interface Address {
  Address: string;
  Protocol: Protocol | undefined;
}

const baseAddress: object = { Address: "" };

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }
    if (message.Protocol !== undefined) {
      Protocol.encode(message.Protocol, writer.uint32(18).fork()).ldelim();
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
          message.Protocol = Protocol.decode(reader, reader.uint32());
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
      message.Protocol = Protocol.fromJSON(object.Protocol);
    } else {
      message.Protocol = undefined;
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.Protocol !== undefined &&
      (obj.Protocol = message.Protocol
        ? Protocol.toJSON(message.Protocol)
        : undefined);
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
      message.Protocol = Protocol.fromPartial(object.Protocol);
    } else {
      message.Protocol = undefined;
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
