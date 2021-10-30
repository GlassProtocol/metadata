/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface erc721_reserve_auction {
  network: network;
  auction_contract_address: address | undefined;
  erc721_contract_address: address | undefined;
  erc721_token_id: string;
}

const baseerc721_reserve_auction: object = { network: 0, erc721_token_id: "" };

export const erc721_reserve_auction = {
  encode(
    message: erc721_reserve_auction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.auction_contract_address !== undefined) {
      address
        .encode(message.auction_contract_address, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.erc721_contract_address !== undefined) {
      address
        .encode(message.erc721_contract_address, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.erc721_token_id !== "") {
      writer.uint32(34).string(message.erc721_token_id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): erc721_reserve_auction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseerc721_reserve_auction } as erc721_reserve_auction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.auction_contract_address = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.erc721_contract_address = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.erc721_token_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): erc721_reserve_auction {
    const message = { ...baseerc721_reserve_auction } as erc721_reserve_auction;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.auction_contract_address !== undefined &&
      object.auction_contract_address !== null
    ) {
      message.auction_contract_address = address.fromJSON(
        object.auction_contract_address
      );
    } else {
      message.auction_contract_address = undefined;
    }
    if (
      object.erc721_contract_address !== undefined &&
      object.erc721_contract_address !== null
    ) {
      message.erc721_contract_address = address.fromJSON(
        object.erc721_contract_address
      );
    } else {
      message.erc721_contract_address = undefined;
    }
    if (
      object.erc721_token_id !== undefined &&
      object.erc721_token_id !== null
    ) {
      message.erc721_token_id = String(object.erc721_token_id);
    } else {
      message.erc721_token_id = "";
    }
    return message;
  },

  toJSON(message: erc721_reserve_auction): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.auction_contract_address !== undefined &&
      (obj.auction_contract_address = message.auction_contract_address
        ? address.toJSON(message.auction_contract_address)
        : undefined);
    message.erc721_contract_address !== undefined &&
      (obj.erc721_contract_address = message.erc721_contract_address
        ? address.toJSON(message.erc721_contract_address)
        : undefined);
    message.erc721_token_id !== undefined &&
      (obj.erc721_token_id = message.erc721_token_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<erc721_reserve_auction>
  ): erc721_reserve_auction {
    const message = { ...baseerc721_reserve_auction } as erc721_reserve_auction;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.auction_contract_address !== undefined &&
      object.auction_contract_address !== null
    ) {
      message.auction_contract_address = address.fromPartial(
        object.auction_contract_address
      );
    } else {
      message.auction_contract_address = undefined;
    }
    if (
      object.erc721_contract_address !== undefined &&
      object.erc721_contract_address !== null
    ) {
      message.erc721_contract_address = address.fromPartial(
        object.erc721_contract_address
      );
    } else {
      message.erc721_contract_address = undefined;
    }
    if (
      object.erc721_token_id !== undefined &&
      object.erc721_token_id !== null
    ) {
      message.erc721_token_id = object.erc721_token_id;
    } else {
      message.erc721_token_id = "";
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
