/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "metadata";

export enum ProtocolName {
  SOLANA = 0,
  UNRECOGNIZED = -1,
}

export function protocolNameFromJSON(object: any): ProtocolName {
  switch (object) {
    case 0:
    case "SOLANA":
      return ProtocolName.SOLANA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProtocolName.UNRECOGNIZED;
  }
}

export function protocolNameToJSON(object: ProtocolName): string {
  switch (object) {
    case ProtocolName.SOLANA:
      return "SOLANA";
    default:
      return "UNKNOWN";
  }
}

export interface Protocol {
  Name: ProtocolName;
  Network: string;
}

const baseProtocol: object = { Name: 0, Network: "" };

export const Protocol = {
  encode(message: Protocol, writer: Writer = Writer.create()): Writer {
    if (message.Name !== 0) {
      writer.uint32(8).int32(message.Name);
    }
    if (message.Network !== "") {
      writer.uint32(18).string(message.Network);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Protocol {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProtocol } as Protocol;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.int32() as any;
          break;
        case 2:
          message.Network = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Protocol {
    const message = { ...baseProtocol } as Protocol;
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = protocolNameFromJSON(object.Name);
    } else {
      message.Name = 0;
    }
    if (object.Network !== undefined && object.Network !== null) {
      message.Network = String(object.Network);
    } else {
      message.Network = "";
    }
    return message;
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = protocolNameToJSON(message.Name));
    message.Network !== undefined && (obj.Network = message.Network);
    return obj;
  },

  fromPartial(object: DeepPartial<Protocol>): Protocol {
    const message = { ...baseProtocol } as Protocol;
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    } else {
      message.Name = 0;
    }
    if (object.Network !== undefined && object.Network !== null) {
      message.Network = object.Network;
    } else {
      message.Network = "";
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
