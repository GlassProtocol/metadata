/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface chainedEditions {
  network: network;
  contractAddress: address | undefined;
  mintkeyContracts: address[];
}

const basechainedEditions: object = { network: 0 };

export const chainedEditions = {
  encode(
    message: chainedEditions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.contractAddress !== undefined) {
      address
        .encode(message.contractAddress, writer.uint32(18).fork())
        .ldelim();
    }
    for (const v of message.mintkeyContracts) {
      address.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): chainedEditions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basechainedEditions } as chainedEditions;
    message.mintkeyContracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.contractAddress = address.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintkeyContracts.push(
            address.decode(reader, reader.uint32())
          );
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
    message.mintkeyContracts = [];
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = address.fromJSON(object.contractAddress);
    } else {
      message.contractAddress = undefined;
    }
    if (
      object.mintkeyContracts !== undefined &&
      object.mintkeyContracts !== null
    ) {
      for (const e of object.mintkeyContracts) {
        message.mintkeyContracts.push(address.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: chainedEditions): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress
        ? address.toJSON(message.contractAddress)
        : undefined);
    if (message.mintkeyContracts) {
      obj.mintkeyContracts = message.mintkeyContracts.map((e) =>
        e ? address.toJSON(e) : undefined
      );
    } else {
      obj.mintkeyContracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<chainedEditions>): chainedEditions {
    const message = { ...basechainedEditions } as chainedEditions;
    message.mintkeyContracts = [];
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = address.fromPartial(object.contractAddress);
    } else {
      message.contractAddress = undefined;
    }
    if (
      object.mintkeyContracts !== undefined &&
      object.mintkeyContracts !== null
    ) {
      for (const e of object.mintkeyContracts) {
        message.mintkeyContracts.push(address.fromPartial(e));
      }
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
