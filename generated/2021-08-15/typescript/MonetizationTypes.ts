/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
