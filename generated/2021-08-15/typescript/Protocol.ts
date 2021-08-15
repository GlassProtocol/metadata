/* eslint-disable */
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "metadata";

export enum Protocol {
  SOLANA_MAINNET = 0,
  UNRECOGNIZED = -1,
}

export function protocolFromJSON(object: any): Protocol {
  switch (object) {
    case 0:
    case "SOLANA_MAINNET":
      return Protocol.SOLANA_MAINNET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Protocol.UNRECOGNIZED;
  }
}

export function protocolToJSON(object: Protocol): string {
  switch (object) {
    case Protocol.SOLANA_MAINNET:
      return "SOLANA_MAINNET";
    default:
      return "UNKNOWN";
  }
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
