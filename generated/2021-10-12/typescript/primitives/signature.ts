/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface signature {
  /** crypto address used to attest to a given address */
  signingAddress: address | undefined;
  /** unix time */
  curve25519ExpirationTime: number;
  /** the temporary signing key */
  curve25519PublicKey: string;
  /** signature of curve25519_expiration_time + curve25519_expiration_time */
  curve25519Attestation: string;
  /** signed by the curve25519 tmp key */
  metadataSignature: string;
}

const basesignature: object = {
  curve25519ExpirationTime: 0,
  curve25519PublicKey: "",
  curve25519Attestation: "",
  metadataSignature: "",
};

export const signature = {
  encode(
    message: signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signingAddress !== undefined) {
      address.encode(message.signingAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.curve25519ExpirationTime !== 0) {
      writer.uint32(16).int64(message.curve25519ExpirationTime);
    }
    if (message.curve25519PublicKey !== "") {
      writer.uint32(26).string(message.curve25519PublicKey);
    }
    if (message.curve25519Attestation !== "") {
      writer.uint32(34).string(message.curve25519Attestation);
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
          message.signingAddress = address.decode(reader, reader.uint32());
          break;
        case 2:
          message.curve25519ExpirationTime = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.curve25519PublicKey = reader.string();
          break;
        case 4:
          message.curve25519Attestation = reader.string();
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
    if (object.signingAddress !== undefined && object.signingAddress !== null) {
      message.signingAddress = address.fromJSON(object.signingAddress);
    } else {
      message.signingAddress = undefined;
    }
    if (
      object.curve25519ExpirationTime !== undefined &&
      object.curve25519ExpirationTime !== null
    ) {
      message.curve25519ExpirationTime = Number(
        object.curve25519ExpirationTime
      );
    } else {
      message.curve25519ExpirationTime = 0;
    }
    if (
      object.curve25519PublicKey !== undefined &&
      object.curve25519PublicKey !== null
    ) {
      message.curve25519PublicKey = String(object.curve25519PublicKey);
    } else {
      message.curve25519PublicKey = "";
    }
    if (
      object.curve25519Attestation !== undefined &&
      object.curve25519Attestation !== null
    ) {
      message.curve25519Attestation = String(object.curve25519Attestation);
    } else {
      message.curve25519Attestation = "";
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
    message.signingAddress !== undefined &&
      (obj.signingAddress = message.signingAddress
        ? address.toJSON(message.signingAddress)
        : undefined);
    message.curve25519ExpirationTime !== undefined &&
      (obj.curve25519ExpirationTime = message.curve25519ExpirationTime);
    message.curve25519PublicKey !== undefined &&
      (obj.curve25519PublicKey = message.curve25519PublicKey);
    message.curve25519Attestation !== undefined &&
      (obj.curve25519Attestation = message.curve25519Attestation);
    message.metadataSignature !== undefined &&
      (obj.metadataSignature = message.metadataSignature);
    return obj;
  },

  fromPartial(object: DeepPartial<signature>): signature {
    const message = { ...basesignature } as signature;
    if (object.signingAddress !== undefined && object.signingAddress !== null) {
      message.signingAddress = address.fromPartial(object.signingAddress);
    } else {
      message.signingAddress = undefined;
    }
    if (
      object.curve25519ExpirationTime !== undefined &&
      object.curve25519ExpirationTime !== null
    ) {
      message.curve25519ExpirationTime = object.curve25519ExpirationTime;
    } else {
      message.curve25519ExpirationTime = 0;
    }
    if (
      object.curve25519PublicKey !== undefined &&
      object.curve25519PublicKey !== null
    ) {
      message.curve25519PublicKey = object.curve25519PublicKey;
    } else {
      message.curve25519PublicKey = "";
    }
    if (
      object.curve25519Attestation !== undefined &&
      object.curve25519Attestation !== null
    ) {
      message.curve25519Attestation = object.curve25519Attestation;
    } else {
      message.curve25519Attestation = "";
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
