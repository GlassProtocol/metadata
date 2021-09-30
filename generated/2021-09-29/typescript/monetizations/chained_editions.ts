/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { address } from "../primatives/address";

export const protobufPackage = "metadata";

export interface chainedEditions {
  previousEdition: address | undefined;
  randomEdition: address | undefined;
}

const basechainedEditions: object = {};

export const chainedEditions = {
  encode(
    message: chainedEditions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.previousEdition !== undefined) {
      address
        .encode(message.previousEdition, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.randomEdition !== undefined) {
      address.encode(message.randomEdition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): chainedEditions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basechainedEditions } as chainedEditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousEdition = address.decode(reader, reader.uint32());
          break;
        case 2:
          message.randomEdition = address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): chainedEditions {
    const message = { ...basechainedEditions } as chainedEditions;
    if (
      object.previousEdition !== undefined &&
      object.previousEdition !== null
    ) {
      message.previousEdition = address.fromJSON(object.previousEdition);
    } else {
      message.previousEdition = undefined;
    }
    if (object.randomEdition !== undefined && object.randomEdition !== null) {
      message.randomEdition = address.fromJSON(object.randomEdition);
    } else {
      message.randomEdition = undefined;
    }
    return message;
  },

  toJSON(message: chainedEditions): unknown {
    const obj: any = {};
    message.previousEdition !== undefined &&
      (obj.previousEdition = message.previousEdition
        ? address.toJSON(message.previousEdition)
        : undefined);
    message.randomEdition !== undefined &&
      (obj.randomEdition = message.randomEdition
        ? address.toJSON(message.randomEdition)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<chainedEditions>): chainedEditions {
    const message = { ...basechainedEditions } as chainedEditions;
    if (
      object.previousEdition !== undefined &&
      object.previousEdition !== null
    ) {
      message.previousEdition = address.fromPartial(object.previousEdition);
    } else {
      message.previousEdition = undefined;
    }
    if (object.randomEdition !== undefined && object.randomEdition !== null) {
      message.randomEdition = address.fromPartial(object.randomEdition);
    } else {
      message.randomEdition = undefined;
    }
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
