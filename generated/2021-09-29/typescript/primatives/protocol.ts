/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export enum protocol {
  UNDEFINED = 0,
  ETH_MAINNET = 1,
  ETH_RINKEBY = 2,
  SOLANA_MAINNET = 3,
  UNRECOGNIZED = -1,
}

export function protocolFromJSON(object: any): protocol {
  switch (object) {
    case 0:
    case "UNDEFINED":
      return protocol.UNDEFINED;
    case 1:
    case "ETH_MAINNET":
      return protocol.ETH_MAINNET;
    case 2:
    case "ETH_RINKEBY":
      return protocol.ETH_RINKEBY;
    case 3:
    case "SOLANA_MAINNET":
      return protocol.SOLANA_MAINNET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return protocol.UNRECOGNIZED;
  }
}

export function protocolToJSON(object: protocol): string {
  switch (object) {
    case protocol.UNDEFINED:
      return "UNDEFINED";
    case protocol.ETH_MAINNET:
      return "ETH_MAINNET";
    case protocol.ETH_RINKEBY:
      return "ETH_RINKEBY";
    case protocol.SOLANA_MAINNET:
      return "SOLANA_MAINNET";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
