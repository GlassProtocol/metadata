/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "metadata";

export interface Tips {
  RecipientAddress: string;
}

const baseTips: object = { RecipientAddress: "" };

export const Tips = {
  encode(message: Tips, writer: Writer = Writer.create()): Writer {
    if (message.RecipientAddress !== "") {
      writer.uint32(10).string(message.RecipientAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tips {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTips } as Tips;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RecipientAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tips {
    const message = { ...baseTips } as Tips;
    if (
      object.RecipientAddress !== undefined &&
      object.RecipientAddress !== null
    ) {
      message.RecipientAddress = String(object.RecipientAddress);
    } else {
      message.RecipientAddress = "";
    }
    return message;
  },

  toJSON(message: Tips): unknown {
    const obj: any = {};
    message.RecipientAddress !== undefined &&
      (obj.RecipientAddress = message.RecipientAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Tips>): Tips {
    const message = { ...baseTips } as Tips;
    if (
      object.RecipientAddress !== undefined &&
      object.RecipientAddress !== null
    ) {
      message.RecipientAddress = object.RecipientAddress;
    } else {
      message.RecipientAddress = "";
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
