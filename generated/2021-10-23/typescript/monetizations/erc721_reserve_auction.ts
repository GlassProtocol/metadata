/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface erc721ReserveAuction {
  network: network;
  auctionContractAddress: address | undefined;
  erc721ContractAddress: address | undefined;
  erc721TokenId: string;
}

const baseerc721ReserveAuction: object = { network: 0, erc721TokenId: "" };

export const erc721ReserveAuction = {
  encode(
    message: erc721ReserveAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.auctionContractAddress !== undefined) {
      address
        .encode(message.auctionContractAddress, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.erc721ContractAddress !== undefined) {
      address
        .encode(message.erc721ContractAddress, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.erc721TokenId !== "") {
      writer.uint32(34).string(message.erc721TokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): erc721ReserveAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseerc721ReserveAuction } as erc721ReserveAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.auctionContractAddress = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.erc721ContractAddress = address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.erc721TokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): erc721ReserveAuction {
    const message = { ...baseerc721ReserveAuction } as erc721ReserveAuction;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (
      object.auctionContractAddress !== undefined &&
      object.auctionContractAddress !== null
    ) {
      message.auctionContractAddress = address.fromJSON(
        object.auctionContractAddress
      );
    } else {
      message.auctionContractAddress = undefined;
    }
    if (
      object.erc721ContractAddress !== undefined &&
      object.erc721ContractAddress !== null
    ) {
      message.erc721ContractAddress = address.fromJSON(
        object.erc721ContractAddress
      );
    } else {
      message.erc721ContractAddress = undefined;
    }
    if (object.erc721TokenId !== undefined && object.erc721TokenId !== null) {
      message.erc721TokenId = String(object.erc721TokenId);
    } else {
      message.erc721TokenId = "";
    }
    return message;
  },

  toJSON(message: erc721ReserveAuction): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.auctionContractAddress !== undefined &&
      (obj.auctionContractAddress = message.auctionContractAddress
        ? address.toJSON(message.auctionContractAddress)
        : undefined);
    message.erc721ContractAddress !== undefined &&
      (obj.erc721ContractAddress = message.erc721ContractAddress
        ? address.toJSON(message.erc721ContractAddress)
        : undefined);
    message.erc721TokenId !== undefined &&
      (obj.erc721TokenId = message.erc721TokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<erc721ReserveAuction>): erc721ReserveAuction {
    const message = { ...baseerc721ReserveAuction } as erc721ReserveAuction;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (
      object.auctionContractAddress !== undefined &&
      object.auctionContractAddress !== null
    ) {
      message.auctionContractAddress = address.fromPartial(
        object.auctionContractAddress
      );
    } else {
      message.auctionContractAddress = undefined;
    }
    if (
      object.erc721ContractAddress !== undefined &&
      object.erc721ContractAddress !== null
    ) {
      message.erc721ContractAddress = address.fromPartial(
        object.erc721ContractAddress
      );
    } else {
      message.erc721ContractAddress = undefined;
    }
    if (object.erc721TokenId !== undefined && object.erc721TokenId !== null) {
      message.erc721TokenId = object.erc721TokenId;
    } else {
      message.erc721TokenId = "";
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
