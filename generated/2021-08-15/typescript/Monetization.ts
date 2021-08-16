/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  MonetizationTypes,
  monetizationTypesFromJSON,
  monetizationTypesToJSON,
} from "./MonetizationTypes";
import { Protocol, protocolFromJSON, protocolToJSON } from "./Protocol";
import { Link } from "./Link";

export const protobufPackage = "metadata";

export interface Monetization {
  MonetizationType: MonetizationTypes;
  Protocol: Protocol;
  Metadata: Link | undefined;
}

const baseMonetization: object = { MonetizationType: 0, Protocol: 0 };

export const Monetization = {
  encode(message: Monetization, writer: Writer = Writer.create()): Writer {
    if (message.MonetizationType !== 0) {
      writer.uint32(8).int32(message.MonetizationType);
    }
    if (message.Protocol !== 0) {
      writer.uint32(16).int32(message.Protocol);
    }
    if (message.Metadata !== undefined) {
      Link.encode(message.Metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Monetization {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonetization } as Monetization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MonetizationType = reader.int32() as any;
          break;
        case 2:
          message.Protocol = reader.int32() as any;
          break;
        case 3:
          message.Metadata = Link.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Monetization {
    const message = { ...baseMonetization } as Monetization;
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
      message.Protocol = protocolFromJSON(object.Protocol);
    } else {
      message.Protocol = 0;
    }
    if (object.Metadata !== undefined && object.Metadata !== null) {
      message.Metadata = Link.fromJSON(object.Metadata);
    } else {
      message.Metadata = undefined;
    }
    return message;
  },

  toJSON(message: Monetization): unknown {
    const obj: any = {};
    message.MonetizationType !== undefined &&
      (obj.MonetizationType = monetizationTypesToJSON(
        message.MonetizationType
      ));
    message.Protocol !== undefined &&
      (obj.Protocol = protocolToJSON(message.Protocol));
    message.Metadata !== undefined &&
      (obj.Metadata = message.Metadata
        ? Link.toJSON(message.Metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Monetization>): Monetization {
    const message = { ...baseMonetization } as Monetization;
    if (
      object.MonetizationType !== undefined &&
      object.MonetizationType !== null
    ) {
      message.MonetizationType = object.MonetizationType;
    } else {
      message.MonetizationType = 0;
    }
    if (object.Protocol !== undefined && object.Protocol !== null) {
      message.Protocol = object.Protocol;
    } else {
      message.Protocol = 0;
    }
    if (object.Metadata !== undefined && object.Metadata !== null) {
      message.Metadata = Link.fromPartial(object.Metadata);
    } else {
      message.Metadata = undefined;
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
