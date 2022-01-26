/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface monocollection_editions {
  network: network;
  edition_contract_address: address | undefined;
  edition_id: string;
}

const basemonocollection_editions: object = { network: 0, edition_id: "" };

export const monocollection_editions = {
  encode(
    message: monocollection_editions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.edition_contract_address !== undefined) {
      address
        .encode(message.edition_contract_address, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.edition_id !== "") {
      writer.uint32(26).string(message.edition_id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): monocollection_editions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basemonocollection_editions,
    } as monocollection_editions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.edition_contract_address = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.edition_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): monocollection_editions {
    const message = {
      ...basemonocollection_editions,
    } as monocollection_editions;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.edition_contract_address !== undefined &&
      object.edition_contract_address !== null
    ) {
      message.edition_contract_address = address.fromJSON(
        object.edition_contract_address
      );
    } else {
      message.edition_contract_address = undefined;
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.edition_id = String(object.edition_id);
    } else {
      message.edition_id = "";
    }
    return message;
  },

  toJSON(message: monocollection_editions): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.edition_contract_address !== undefined &&
      (obj.edition_contract_address = message.edition_contract_address
        ? address.toJSON(message.edition_contract_address)
        : undefined);
    message.edition_id !== undefined && (obj.edition_id = message.edition_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<monocollection_editions>
  ): monocollection_editions {
    const message = {
      ...basemonocollection_editions,
    } as monocollection_editions;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.edition_contract_address !== undefined &&
      object.edition_contract_address !== null
    ) {
      message.edition_contract_address = address.fromPartial(
        object.edition_contract_address
      );
    } else {
      message.edition_contract_address = undefined;
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.edition_id = object.edition_id;
    } else {
      message.edition_id = "";
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
