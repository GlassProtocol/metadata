/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface chained_editions {
  network: network;
  contract_address: address | undefined;
  mintkey_contracts: address[];
}

const basechained_editions: object = { network: 0 };

export const chained_editions = {
  encode(
    message: chained_editions,
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
    for (const v of message.mintkey_contracts) {
      address.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): chained_editions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basechained_editions } as chained_editions;
    message.mintkey_contracts = [];
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
          message.mintkey_contracts.push(
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

  fromJSON(object: any): chained_editions {
    const message = { ...basechained_editions } as chained_editions;
    message.mintkey_contracts = [];
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
      object.mintkey_contracts !== undefined &&
      object.mintkey_contracts !== null
    ) {
      for (const e of object.mintkey_contracts) {
        message.mintkey_contracts.push(address.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: chained_editions): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.contract_address !== undefined &&
      (obj.contract_address = message.contract_address
        ? address.toJSON(message.contract_address)
        : undefined);
    if (message.mintkey_contracts) {
      obj.mintkey_contracts = message.mintkey_contracts.map((e) =>
        e ? address.toJSON(e) : undefined
      );
    } else {
      obj.mintkey_contracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<chained_editions>): chained_editions {
    const message = { ...basechained_editions } as chained_editions;
    message.mintkey_contracts = [];
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
      object.mintkey_contracts !== undefined &&
      object.mintkey_contracts !== null
    ) {
      for (const e of object.mintkey_contracts) {
        message.mintkey_contracts.push(address.fromPartial(e));
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
