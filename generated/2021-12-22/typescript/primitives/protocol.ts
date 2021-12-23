/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export enum protocol {
  PROTOCOL_UNDEFINED = 0,
  ETHEREUM = 1,
  SOLANA = 2,
  BITCOIN = 3,
  UNRECOGNIZED = -1,
}

export function protocolFromJSON(object: any): protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNDEFINED":
      return protocol.PROTOCOL_UNDEFINED;
    case 1:
    case "ETHEREUM":
      return protocol.ETHEREUM;
    case 2:
    case "SOLANA":
      return protocol.SOLANA;
    case 3:
    case "BITCOIN":
      return protocol.BITCOIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return protocol.UNRECOGNIZED;
  }
}

export function protocolToJSON(object: protocol): string {
  switch (object) {
    case protocol.PROTOCOL_UNDEFINED:
      return "PROTOCOL_UNDEFINED";
    case protocol.ETHEREUM:
      return "ETHEREUM";
    case protocol.SOLANA:
      return "SOLANA";
    case protocol.BITCOIN:
      return "BITCOIN";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
