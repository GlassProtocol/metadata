/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface linked_editions {
  network: network;
  contract_address: address | undefined;
  linked_contract: address | undefined;
}

const baselinked_editions: object = { network: 0 };

export const linked_editions = {
  encode(
    message: linked_editions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.contract_address !== undefined) {
      address
        .encode(message.contract_address, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.linked_contract !== undefined) {
      address
        .encode(message.linked_contract, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): linked_editions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baselinked_editions } as linked_editions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.contract_address = address.decode(reader, reader.uint32());
          break;
        case 3:
          message.linked_contract = address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): linked_editions {
    const message = { ...baselinked_editions } as linked_editions;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = address.fromJSON(object.contract_address);
    } else {
      message.contract_address = undefined;
    }
    if (
      object.linked_contract !== undefined &&
      object.linked_contract !== null
    ) {
      message.linked_contract = address.fromJSON(object.linked_contract);
    } else {
      message.linked_contract = undefined;
    }
    return message;
  },

  toJSON(message: linked_editions): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.contract_address !== undefined &&
      (obj.contract_address = message.contract_address
        ? address.toJSON(message.contract_address)
        : undefined);
    message.linked_contract !== undefined &&
      (obj.linked_contract = message.linked_contract
        ? address.toJSON(message.linked_contract)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<linked_editions>): linked_editions {
    const message = { ...baselinked_editions } as linked_editions;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = address.fromPartial(object.contract_address);
    } else {
      message.contract_address = undefined;
    }
    if (
      object.linked_contract !== undefined &&
      object.linked_contract !== null
    ) {
      message.linked_contract = address.fromPartial(object.linked_contract);
    } else {
      message.linked_contract = undefined;
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
