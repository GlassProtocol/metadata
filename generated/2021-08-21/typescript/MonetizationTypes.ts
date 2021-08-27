/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export enum MonetizationTypes {
  NONE = 0,
  TIPS = 1,
  ERC721_RESERVE_AUCTION = 2,
  ETH_EDITIONS = 3,
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
    case 2:
    case "ERC721_RESERVE_AUCTION":
      return MonetizationTypes.ERC721_RESERVE_AUCTION;
    case 3:
    case "ETH_EDITIONS":
      return MonetizationTypes.ETH_EDITIONS;
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
    case MonetizationTypes.ERC721_RESERVE_AUCTION:
      return "ERC721_RESERVE_AUCTION";
    case MonetizationTypes.ETH_EDITIONS:
      return "ETH_EDITIONS";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
