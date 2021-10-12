/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface signature {
  /** crypto address used to attest to a given address */
  financialPublicKey: address | undefined;
  /** unix time */
  ed25519ExpirationTime: number;
  /** the temporary signing key */
  ed25519PublicKey: string;
  /** signature of ed25519_public_key + ed25519_expiration_time */
  ed25519Attestation: string;
  /** signed by the ed25519 tmp key */
  metadataSignature: string;
}

const basesignature: object = {
  ed25519ExpirationTime: 0,
  ed25519PublicKey: "",
  ed25519Attestation: "",
  metadataSignature: "",
};

export const signature = {
  encode(
    message: signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.financialPublicKey !== undefined) {
      address
        .encode(message.financialPublicKey, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.ed25519ExpirationTime !== 0) {
      writer.uint32(16).int64(message.ed25519ExpirationTime);
    }
    if (message.ed25519PublicKey !== "") {
      writer.uint32(26).string(message.ed25519PublicKey);
    }
    if (message.ed25519Attestation !== "") {
      writer.uint32(34).string(message.ed25519Attestation);
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
          message.financialPublicKey = address.decode(reader, reader.uint32());
          break;
        case 2:
          message.ed25519ExpirationTime = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.ed25519PublicKey = reader.string();
          break;
        case 4:
          message.ed25519Attestation = reader.string();
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
      object.financialPublicKey !== undefined &&
      object.financialPublicKey !== null
    ) {
      message.financialPublicKey = address.fromJSON(object.financialPublicKey);
    } else {
      message.financialPublicKey = undefined;
    }
    if (
      object.ed25519ExpirationTime !== undefined &&
      object.ed25519ExpirationTime !== null
    ) {
      message.ed25519ExpirationTime = Number(object.ed25519ExpirationTime);
    } else {
      message.ed25519ExpirationTime = 0;
    }
    if (
      object.ed25519PublicKey !== undefined &&
      object.ed25519PublicKey !== null
    ) {
      message.ed25519PublicKey = String(object.ed25519PublicKey);
    } else {
      message.ed25519PublicKey = "";
    }
    if (
      object.ed25519Attestation !== undefined &&
      object.ed25519Attestation !== null
    ) {
      message.ed25519Attestation = String(object.ed25519Attestation);
    } else {
      message.ed25519Attestation = "";
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
    message.financialPublicKey !== undefined &&
      (obj.financialPublicKey = message.financialPublicKey
        ? address.toJSON(message.financialPublicKey)
        : undefined);
    message.ed25519ExpirationTime !== undefined &&
      (obj.ed25519ExpirationTime = message.ed25519ExpirationTime);
    message.ed25519PublicKey !== undefined &&
      (obj.ed25519PublicKey = message.ed25519PublicKey);
    message.ed25519Attestation !== undefined &&
      (obj.ed25519Attestation = message.ed25519Attestation);
    message.metadataSignature !== undefined &&
      (obj.metadataSignature = message.metadataSignature);
    return obj;
  },

  fromPartial(object: DeepPartial<signature>): signature {
    const message = { ...basesignature } as signature;
    if (
      object.financialPublicKey !== undefined &&
      object.financialPublicKey !== null
    ) {
      message.financialPublicKey = address.fromPartial(
        object.financialPublicKey
      );
    } else {
      message.financialPublicKey = undefined;
    }
    if (
      object.ed25519ExpirationTime !== undefined &&
      object.ed25519ExpirationTime !== null
    ) {
      message.ed25519ExpirationTime = object.ed25519ExpirationTime;
    } else {
      message.ed25519ExpirationTime = 0;
    }
    if (
      object.ed25519PublicKey !== undefined &&
      object.ed25519PublicKey !== null
    ) {
      message.ed25519PublicKey = object.ed25519PublicKey;
    } else {
      message.ed25519PublicKey = "";
    }
    if (
      object.ed25519Attestation !== undefined &&
      object.ed25519Attestation !== null
    ) {
      message.ed25519Attestation = object.ed25519Attestation;
    } else {
      message.ed25519Attestation = "";
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
