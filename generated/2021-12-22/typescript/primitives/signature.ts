/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export enum algorithm {
  ALGORITHM_UNDEFINED = 0,
  ED25519 = 1,
  UNRECOGNIZED = -1,
}

export function algorithmFromJSON(object: any): algorithm {
  switch (object) {
    case 0:
    case "ALGORITHM_UNDEFINED":
      return algorithm.ALGORITHM_UNDEFINED;
    case 1:
    case "ED25519":
      return algorithm.ED25519;
    case -1:
    case "UNRECOGNIZED":
    default:
      return algorithm.UNRECOGNIZED;
  }
}

export function algorithmToJSON(object: algorithm): string {
  switch (object) {
    case algorithm.ALGORITHM_UNDEFINED:
      return "ALGORITHM_UNDEFINED";
    case algorithm.ED25519:
      return "ED25519";
    default:
      return "UNKNOWN";
  }
}

export enum encoding {
  ENCODING_UNDEFINED = 0,
  BASE64_URL = 1,
  UNRECOGNIZED = -1,
}

export function encodingFromJSON(object: any): encoding {
  switch (object) {
    case 0:
    case "ENCODING_UNDEFINED":
      return encoding.ENCODING_UNDEFINED;
    case 1:
    case "BASE64_URL":
      return encoding.BASE64_URL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return encoding.UNRECOGNIZED;
  }
}

export function encodingToJSON(object: encoding): string {
  switch (object) {
    case encoding.ENCODING_UNDEFINED:
      return "ENCODING_UNDEFINED";
    case encoding.BASE64_URL:
      return "BASE64_URL";
    default:
      return "UNKNOWN";
  }
}

export interface signature {
  /** crypto address used to attest to a given address */
  claims_signing_address: address | undefined;
  /** this gets signed */
  claims: claims | undefined;
  /** type of algorithm used */
  header: header | undefined;
  /** signature of header by the attesting_public_key */
  claims_signature: string;
  /** signed by the temporary key */
  metadata_signature: string;
}

export interface header {
  /** ed25519 */
  algorithm: algorithm;
  /** base64URL */
  encoding: encoding;
}

export interface claims {
  /** GLASS.XYZ */
  issuer: string;
  /** the */
  metadata_signing_key: string;
  /** expires at */
  expires_at: number;
  /** issued at */
  issued_at: number;
}

const basesignature: object = { claims_signature: "", metadata_signature: "" };

export const signature = {
  encode(
    message: signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.claims_signing_address !== undefined) {
      address
        .encode(message.claims_signing_address, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.claims !== undefined) {
      claims.encode(message.claims, writer.uint32(18).fork()).ldelim();
    }
    if (message.header !== undefined) {
      header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.claims_signature !== "") {
      writer.uint32(34).string(message.claims_signature);
    }
    if (message.metadata_signature !== "") {
      writer.uint32(42).string(message.metadata_signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basesignature } as signature;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims_signing_address = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.claims = claims.decode(reader, reader.uint32());
          break;
        case 3:
          message.header = header.decode(reader, reader.uint32());
          break;
        case 4:
          message.claims_signature = reader.string();
          break;
        case 5:
          message.metadata_signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): signature {
    const message = { ...basesignature } as signature;
    if (
      object.claims_signing_address !== undefined &&
      object.claims_signing_address !== null
    ) {
      message.claims_signing_address = address.fromJSON(
        object.claims_signing_address
      );
    } else {
      message.claims_signing_address = undefined;
    }
    if (object.claims !== undefined && object.claims !== null) {
      message.claims = claims.fromJSON(object.claims);
    } else {
      message.claims = undefined;
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }
    if (
      object.claims_signature !== undefined &&
      object.claims_signature !== null
    ) {
      message.claims_signature = String(object.claims_signature);
    } else {
      message.claims_signature = "";
    }
    if (
      object.metadata_signature !== undefined &&
      object.metadata_signature !== null
    ) {
      message.metadata_signature = String(object.metadata_signature);
    } else {
      message.metadata_signature = "";
    }
    return message;
  },

  toJSON(message: signature): unknown {
    const obj: any = {};
    message.claims_signing_address !== undefined &&
      (obj.claims_signing_address = message.claims_signing_address
        ? address.toJSON(message.claims_signing_address)
        : undefined);
    message.claims !== undefined &&
      (obj.claims = message.claims ? claims.toJSON(message.claims) : undefined);
    message.header !== undefined &&
      (obj.header = message.header ? header.toJSON(message.header) : undefined);
    message.claims_signature !== undefined &&
      (obj.claims_signature = message.claims_signature);
    message.metadata_signature !== undefined &&
      (obj.metadata_signature = message.metadata_signature);
    return obj;
  },

  fromPartial(object: DeepPartial<signature>): signature {
    const message = { ...basesignature } as signature;
    if (
      object.claims_signing_address !== undefined &&
      object.claims_signing_address !== null
    ) {
      message.claims_signing_address = address.fromPartial(
        object.claims_signing_address
      );
    } else {
      message.claims_signing_address = undefined;
    }
    if (object.claims !== undefined && object.claims !== null) {
      message.claims = claims.fromPartial(object.claims);
    } else {
      message.claims = undefined;
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }
    if (
      object.claims_signature !== undefined &&
      object.claims_signature !== null
    ) {
      message.claims_signature = object.claims_signature;
    } else {
      message.claims_signature = "";
    }
    if (
      object.metadata_signature !== undefined &&
      object.metadata_signature !== null
    ) {
      message.metadata_signature = object.metadata_signature;
    } else {
      message.metadata_signature = "";
    }
    return message;
  },
};

const baseheader: object = { algorithm: 0, encoding: 0 };

export const header = {
  encode(
    message: header,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.algorithm !== 0) {
      writer.uint32(8).int32(message.algorithm);
    }
    if (message.encoding !== 0) {
      writer.uint32(16).int32(message.encoding);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseheader } as header;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.algorithm = reader.int32() as any;
          break;
        case 2:
          message.encoding = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): header {
    const message = { ...baseheader } as header;
    if (object.algorithm !== undefined && object.algorithm !== null) {
      message.algorithm = algorithmFromJSON(object.algorithm);
    } else {
      message.algorithm = 0;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = encodingFromJSON(object.encoding);
    } else {
      message.encoding = 0;
    }
    return message;
  },

  toJSON(message: header): unknown {
    const obj: any = {};
    message.algorithm !== undefined &&
      (obj.algorithm = algorithmToJSON(message.algorithm));
    message.encoding !== undefined &&
      (obj.encoding = encodingToJSON(message.encoding));
    return obj;
  },

  fromPartial(object: DeepPartial<header>): header {
    const message = { ...baseheader } as header;
    if (object.algorithm !== undefined && object.algorithm !== null) {
      message.algorithm = object.algorithm;
    } else {
      message.algorithm = 0;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = 0;
    }
    return message;
  },
};

const baseclaims: object = {
  issuer: "",
  metadata_signing_key: "",
  expires_at: 0,
  issued_at: 0,
};

export const claims = {
  encode(
    message: claims,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.metadata_signing_key !== "") {
      writer.uint32(18).string(message.metadata_signing_key);
    }
    if (message.expires_at !== 0) {
      writer.uint32(24).int64(message.expires_at);
    }
    if (message.issued_at !== 0) {
      writer.uint32(32).int64(message.issued_at);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): claims {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseclaims } as claims;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.metadata_signing_key = reader.string();
          break;
        case 3:
          message.expires_at = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.issued_at = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): claims {
    const message = { ...baseclaims } as claims;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (
      object.metadata_signing_key !== undefined &&
      object.metadata_signing_key !== null
    ) {
      message.metadata_signing_key = String(object.metadata_signing_key);
    } else {
      message.metadata_signing_key = "";
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expires_at = Number(object.expires_at);
    } else {
      message.expires_at = 0;
    }
    if (object.issued_at !== undefined && object.issued_at !== null) {
      message.issued_at = Number(object.issued_at);
    } else {
      message.issued_at = 0;
    }
    return message;
  },

  toJSON(message: claims): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.metadata_signing_key !== undefined &&
      (obj.metadata_signing_key = message.metadata_signing_key);
    message.expires_at !== undefined && (obj.expires_at = message.expires_at);
    message.issued_at !== undefined && (obj.issued_at = message.issued_at);
    return obj;
  },

  fromPartial(object: DeepPartial<claims>): claims {
    const message = { ...baseclaims } as claims;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (
      object.metadata_signing_key !== undefined &&
      object.metadata_signing_key !== null
    ) {
      message.metadata_signing_key = object.metadata_signing_key;
    } else {
      message.metadata_signing_key = "";
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expires_at = object.expires_at;
    } else {
      message.expires_at = 0;
    }
    if (object.issued_at !== undefined && object.issued_at !== null) {
      message.issued_at = object.issued_at;
    } else {
      message.issued_at = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
