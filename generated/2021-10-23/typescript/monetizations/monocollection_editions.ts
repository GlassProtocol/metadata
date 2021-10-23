/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface monocollectionEditions {
  network: network;
  editionContractAddress: address | undefined;
  editionId: string;
}

const basemonocollectionEditions: object = { network: 0, editionId: "" };

export const monocollectionEditions = {
  encode(
    message: monocollectionEditions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.editionContractAddress !== undefined) {
      address
        .encode(message.editionContractAddress, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.editionId !== "") {
      writer.uint32(26).string(message.editionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): monocollectionEditions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basemonocollectionEditions } as monocollectionEditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.editionContractAddress = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.editionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): monocollectionEditions {
    const message = { ...basemonocollectionEditions } as monocollectionEditions;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.editionContractAddress !== undefined &&
      object.editionContractAddress !== null
    ) {
      message.editionContractAddress = address.fromJSON(
        object.editionContractAddress
      );
    } else {
      message.editionContractAddress = undefined;
    }
    if (object.editionId !== undefined && object.editionId !== null) {
      message.editionId = String(object.editionId);
    } else {
      message.editionId = "";
    }
    return message;
  },

  toJSON(message: monocollectionEditions): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.editionContractAddress !== undefined &&
      (obj.editionContractAddress = message.editionContractAddress
        ? address.toJSON(message.editionContractAddress)
        : undefined);
    message.editionId !== undefined && (obj.editionId = message.editionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<monocollectionEditions>
  ): monocollectionEditions {
    const message = { ...basemonocollectionEditions } as monocollectionEditions;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.editionContractAddress !== undefined &&
      object.editionContractAddress !== null
    ) {
      message.editionContractAddress = address.fromPartial(
        object.editionContractAddress
      );
    } else {
      message.editionContractAddress = undefined;
    }
    if (object.editionId !== undefined && object.editionId !== null) {
      message.editionId = object.editionId;
    } else {
      message.editionId = "";
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
