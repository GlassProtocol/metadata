/* eslint-disable */
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
