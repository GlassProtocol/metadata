/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export enum network {
  NETWORK_UNDEFINED = 0,
  ETH_MAINNET = 1,
  ETH_RINKEBY = 2,
  SOL_MAINNET = 3,
  SOL_DEVNET = 4,
  BTC_MAINNET = 5,
  UNRECOGNIZED = -1,
}

export function networkFromJSON(object: any): network {
  switch (object) {
    case 0:
    case "NETWORK_UNDEFINED":
      return network.NETWORK_UNDEFINED;
    case 1:
    case "ETH_MAINNET":
      return network.ETH_MAINNET;
    case 2:
    case "ETH_RINKEBY":
      return network.ETH_RINKEBY;
    case 3:
    case "SOL_MAINNET":
      return network.SOL_MAINNET;
    case 4:
    case "SOL_DEVNET":
      return network.SOL_DEVNET;
    case 5:
    case "BTC_MAINNET":
      return network.BTC_MAINNET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return network.UNRECOGNIZED;
  }
}

export function networkToJSON(object: network): string {
  switch (object) {
    case network.NETWORK_UNDEFINED:
      return "NETWORK_UNDEFINED";
    case network.ETH_MAINNET:
      return "ETH_MAINNET";
    case network.ETH_RINKEBY:
      return "ETH_RINKEBY";
    case network.SOL_MAINNET:
      return "SOL_MAINNET";
    case network.SOL_DEVNET:
      return "SOL_DEVNET";
    case network.BTC_MAINNET:
      return "BTC_MAINNET";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
