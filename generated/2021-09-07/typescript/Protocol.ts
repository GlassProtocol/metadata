/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export enum Protocol {
  SOLANA_MAINNET = 0,
  ETH_MAINNET = 1,
  ETH_RINKEBY = 2,
  UNRECOGNIZED = -1,
}

export function protocolFromJSON(object: any): Protocol {
  switch (object) {
    case 0:
    case "SOLANA_MAINNET":
      return Protocol.SOLANA_MAINNET;
    case 1:
    case "ETH_MAINNET":
      return Protocol.ETH_MAINNET;
    case 2:
    case "ETH_RINKEBY":
      return Protocol.ETH_RINKEBY;
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
    case Protocol.ETH_MAINNET:
      return "ETH_MAINNET";
    case Protocol.ETH_RINKEBY:
      return "ETH_RINKEBY";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
