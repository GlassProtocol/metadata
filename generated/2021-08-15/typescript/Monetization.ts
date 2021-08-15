/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Protocol } from "./Protocol";
import { Link } from "./Link";

export const protobufPackage = "metadata";

export enum MonetizationTypes {
  NONE = 0,
  TIPS = 1,
  UNRECOGNIZED = -1,
}

export function monetizationTypesFromJSON(object: any): MonetizationTypes {
  switch (object) {
    case 0:
    case "NONE":
      return MonetizationTypes.NONE;
    case 1:
    case "TIPS":
      return MonetizationTypes.TIPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MonetizationTypes.UNRECOGNIZED;
  }
}

export function monetizationTypesToJSON(object: MonetizationTypes): string {
  switch (object) {
    case MonetizationTypes.NONE:
      return "NONE";
    case MonetizationTypes.TIPS:
      return "TIPS";
    default:
      return "UNKNOWN";
  }
}

export interface Monetization {
  Version: string;
  MonetizationType: MonetizationTypes;
  Protocol: Protocol | undefined;
  Metadata: Link | undefined;
}

const baseMonetization: object = { Version: "", MonetizationType: 0 };

export const Monetization = {
  encode(message: Monetization, writer: Writer = Writer.create()): Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }
    if (message.MonetizationType !== 0) {
      writer.uint32(16).int32(message.MonetizationType);
    }
    if (message.Protocol !== undefined) {
      Protocol.encode(message.Protocol, writer.uint32(26).fork()).ldelim();
    }
    if (message.Metadata !== undefined) {
      Link.encode(message.Metadata, writer.uint32(34).fork()).ldelim();
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
          message.Version = reader.string();
          break;
        case 2:
          message.MonetizationType = reader.int32() as any;
          break;
        case 3:
          message.Protocol = Protocol.decode(reader, reader.uint32());
          break;
        case 4:
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
    if (object.Metadata !== undefined && object.Metadata !== null) {
      message.Metadata = Link.fromJSON(object.Metadata);
    } else {
      message.Metadata = undefined;
    }
    return message;
  },

  toJSON(message: Monetization): unknown {
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
    message.Metadata !== undefined &&
      (obj.Metadata = message.Metadata
        ? Link.toJSON(message.Metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Monetization>): Monetization {
    const message = { ...baseMonetization } as Monetization;
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
