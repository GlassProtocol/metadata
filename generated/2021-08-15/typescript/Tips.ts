/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  MonetizationTypes,
  monetizationTypesFromJSON,
  monetizationTypesToJSON,
} from "./MonetizationTypes";
import { Protocol } from "./Protocol";

export const protobufPackage = "metadata";

export interface Tips {
  Version: string;
  MonetizationType: MonetizationTypes;
  Protocol: Protocol | undefined;
  RecipientAddress: string;
}

const baseTips: object = {
  Version: "",
  MonetizationType: 0,
  RecipientAddress: "",
};

export const Tips = {
  encode(message: Tips, writer: Writer = Writer.create()): Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }
    if (message.MonetizationType !== 0) {
      writer.uint32(16).int32(message.MonetizationType);
    }
    if (message.Protocol !== undefined) {
      Protocol.encode(message.Protocol, writer.uint32(26).fork()).ldelim();
    }
    if (message.RecipientAddress !== "") {
      writer.uint32(34).string(message.RecipientAddress);
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
          message.Version = reader.string();
          break;
        case 2:
          message.MonetizationType = reader.int32() as any;
          break;
        case 3:
          message.Protocol = Protocol.decode(reader, reader.uint32());
          break;
        case 4:
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
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = String(object.Version);
    } else {
      message.Version = "";
    }
    if (
      object.MonetizationType !== undefined &&
      object.MonetizationType !== null
    ) {
      message.MonetizationType = monetizationTypesFromJSON(
        object.MonetizationType
      );
    } else {
      message.MonetizationType = 0;
    }
    if (object.Protocol !== undefined && object.Protocol !== null) {
      message.Protocol = Protocol.fromJSON(object.Protocol);
    } else {
      message.Protocol = undefined;
    }
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
    message.Version !== undefined && (obj.Version = message.Version);
    message.MonetizationType !== undefined &&
      (obj.MonetizationType = monetizationTypesToJSON(
        message.MonetizationType
      ));
    message.Protocol !== undefined &&
      (obj.Protocol = message.Protocol
        ? Protocol.toJSON(message.Protocol)
        : undefined);
    message.RecipientAddress !== undefined &&
      (obj.RecipientAddress = message.RecipientAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Tips>): Tips {
    const message = { ...baseTips } as Tips;
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = object.Version;
    } else {
      message.Version = "";
    }
    if (
      object.MonetizationType !== undefined &&
      object.MonetizationType !== null
    ) {
      message.MonetizationType = object.MonetizationType;
    } else {
      message.MonetizationType = 0;
    }
    if (object.Protocol !== undefined && object.Protocol !== null) {
      message.Protocol = Protocol.fromPartial(object.Protocol);
    } else {
      message.Protocol = undefined;
    }
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
