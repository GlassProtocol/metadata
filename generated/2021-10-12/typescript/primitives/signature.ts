/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface signature {
  /** crypto address used to attest to a given address */
  claimSigningAddress: address | undefined;
  /** this gets signed */
  claims: claims | undefined;
  /** type of algorithm used */
  header: header | undefined;
  /** signature of header by the attesting_public_key */
  claimsSignature: string;
  /** signed by the temporary key */
  metadataSignature: string;
}

export interface header {
  /** ed25519 */
  algorithm: string;
  /** base64URL */
  encoding: string;
}

export interface claims {
  /** GLASS.XYZ */
  issuer: string;
  /** the */
  metadataSigningKey: string;
  /** expires at */
  expiresAt: number;
  /** issued at */
  issuedAt: number;
}

const basesignature: object = { claimsSignature: "", metadataSignature: "" };

export const signature = {
  encode(
    message: signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.claimSigningAddress !== undefined) {
      address
        .encode(message.claimSigningAddress, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.claims !== undefined) {
      claims.encode(message.claims, writer.uint32(18).fork()).ldelim();
    }
    if (message.header !== undefined) {
      header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimsSignature !== "") {
      writer.uint32(34).string(message.claimsSignature);
    }
    if (message.metadataSignature !== "") {
      writer.uint32(42).string(message.metadataSignature);
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
          message.claimSigningAddress = address.decode(reader, reader.uint32());
          break;
        case 2:
          message.claims = claims.decode(reader, reader.uint32());
          break;
        case 3:
          message.header = header.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimsSignature = reader.string();
          break;
        case 5:
          message.metadataSignature = reader.string();
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
      object.claimSigningAddress !== undefined &&
      object.claimSigningAddress !== null
    ) {
      message.claimSigningAddress = address.fromJSON(
        object.claimSigningAddress
      );
    } else {
      message.claimSigningAddress = undefined;
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
      object.claimsSignature !== undefined &&
      object.claimsSignature !== null
    ) {
      message.claimsSignature = String(object.claimsSignature);
    } else {
      message.claimsSignature = "";
    }
    if (
      object.metadataSignature !== undefined &&
      object.metadataSignature !== null
    ) {
      message.metadataSignature = String(object.metadataSignature);
    } else {
      message.metadataSignature = "";
    }
    return message;
  },

  toJSON(message: signature): unknown {
    const obj: any = {};
    message.claimSigningAddress !== undefined &&
      (obj.claimSigningAddress = message.claimSigningAddress
        ? address.toJSON(message.claimSigningAddress)
        : undefined);
    message.claims !== undefined &&
      (obj.claims = message.claims ? claims.toJSON(message.claims) : undefined);
    message.header !== undefined &&
      (obj.header = message.header ? header.toJSON(message.header) : undefined);
    message.claimsSignature !== undefined &&
      (obj.claimsSignature = message.claimsSignature);
    message.metadataSignature !== undefined &&
      (obj.metadataSignature = message.metadataSignature);
    return obj;
  },

  fromPartial(object: DeepPartial<signature>): signature {
    const message = { ...basesignature } as signature;
    if (
      object.claimSigningAddress !== undefined &&
      object.claimSigningAddress !== null
    ) {
      message.claimSigningAddress = address.fromPartial(
        object.claimSigningAddress
      );
    } else {
      message.claimSigningAddress = undefined;
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
      object.claimsSignature !== undefined &&
      object.claimsSignature !== null
    ) {
      message.claimsSignature = object.claimsSignature;
    } else {
      message.claimsSignature = "";
    }
    if (
      object.metadataSignature !== undefined &&
      object.metadataSignature !== null
    ) {
      message.metadataSignature = object.metadataSignature;
    } else {
      message.metadataSignature = "";
    }
    return message;
  },
};

const baseheader: object = { algorithm: "", encoding: "" };

export const header = {
  encode(
    message: header,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.algorithm !== "") {
      writer.uint32(10).string(message.algorithm);
    }
    if (message.encoding !== "") {
      writer.uint32(18).string(message.encoding);
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
          message.algorithm = reader.string();
          break;
        case 2:
          message.encoding = reader.string();
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
      message.algorithm = String(object.algorithm);
    } else {
      message.algorithm = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = "";
    }
    return message;
  },

  toJSON(message: header): unknown {
    const obj: any = {};
    message.algorithm !== undefined && (obj.algorithm = message.algorithm);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },

  fromPartial(object: DeepPartial<header>): header {
    const message = { ...baseheader } as header;
    if (object.algorithm !== undefined && object.algorithm !== null) {
      message.algorithm = object.algorithm;
    } else {
      message.algorithm = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = "";
    }
    return message;
  },
};

const baseclaims: object = {
  issuer: "",
  metadataSigningKey: "",
  expiresAt: 0,
  issuedAt: 0,
};

export const claims = {
  encode(
    message: claims,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.metadataSigningKey !== "") {
      writer.uint32(18).string(message.metadataSigningKey);
    }
    if (message.expiresAt !== 0) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.issuedAt !== 0) {
      writer.uint32(32).int64(message.issuedAt);
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
          message.metadataSigningKey = reader.string();
          break;
        case 3:
          message.expiresAt = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.issuedAt = longToNumber(reader.int64() as Long);
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
      object.metadataSigningKey !== undefined &&
      object.metadataSigningKey !== null
    ) {
      message.metadataSigningKey = String(object.metadataSigningKey);
    } else {
      message.metadataSigningKey = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Number(object.expiresAt);
    } else {
      message.expiresAt = 0;
    }
    if (object.issuedAt !== undefined && object.issuedAt !== null) {
      message.issuedAt = Number(object.issuedAt);
    } else {
      message.issuedAt = 0;
    }
    return message;
  },

  toJSON(message: claims): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.metadataSigningKey !== undefined &&
      (obj.metadataSigningKey = message.metadataSigningKey);
    message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
    message.issuedAt !== undefined && (obj.issuedAt = message.issuedAt);
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
      object.metadataSigningKey !== undefined &&
      object.metadataSigningKey !== null
    ) {
      message.metadataSigningKey = object.metadataSigningKey;
    } else {
      message.metadataSigningKey = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = object.expiresAt;
    } else {
      message.expiresAt = 0;
    }
    if (object.issuedAt !== undefined && object.issuedAt !== null) {
      message.issuedAt = object.issuedAt;
    } else {
      message.issuedAt = 0;
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
