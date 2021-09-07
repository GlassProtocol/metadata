/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface ERC721ReserveAuction {
  AuctionContractAddress: string;
  ERC721ContractAddress: string;
  ERC721TokenID: string;
}

const baseERC721ReserveAuction: object = {
  AuctionContractAddress: "",
  ERC721ContractAddress: "",
  ERC721TokenID: "",
};

export const ERC721ReserveAuction = {
  encode(
    message: ERC721ReserveAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.AuctionContractAddress !== "") {
      writer.uint32(10).string(message.AuctionContractAddress);
    }
    if (message.ERC721ContractAddress !== "") {
      writer.uint32(18).string(message.ERC721ContractAddress);
    }
    if (message.ERC721TokenID !== "") {
      writer.uint32(26).string(message.ERC721TokenID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC721ReserveAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseERC721ReserveAuction } as ERC721ReserveAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AuctionContractAddress = reader.string();
          break;
        case 2:
          message.ERC721ContractAddress = reader.string();
          break;
        case 3:
          message.ERC721TokenID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC721ReserveAuction {
    const message = { ...baseERC721ReserveAuction } as ERC721ReserveAuction;
    if (
      object.AuctionContractAddress !== undefined &&
      object.AuctionContractAddress !== null
    ) {
      message.AuctionContractAddress = String(object.AuctionContractAddress);
    } else {
      message.AuctionContractAddress = "";
    }
    if (
      object.ERC721ContractAddress !== undefined &&
      object.ERC721ContractAddress !== null
    ) {
      message.ERC721ContractAddress = String(object.ERC721ContractAddress);
    } else {
      message.ERC721ContractAddress = "";
    }
    if (object.ERC721TokenID !== undefined && object.ERC721TokenID !== null) {
      message.ERC721TokenID = String(object.ERC721TokenID);
    } else {
      message.ERC721TokenID = "";
    }
    return message;
  },

  toJSON(message: ERC721ReserveAuction): unknown {
    const obj: any = {};
    message.AuctionContractAddress !== undefined &&
      (obj.AuctionContractAddress = message.AuctionContractAddress);
    message.ERC721ContractAddress !== undefined &&
      (obj.ERC721ContractAddress = message.ERC721ContractAddress);
    message.ERC721TokenID !== undefined &&
      (obj.ERC721TokenID = message.ERC721TokenID);
    return obj;
  },

  fromPartial(object: DeepPartial<ERC721ReserveAuction>): ERC721ReserveAuction {
    const message = { ...baseERC721ReserveAuction } as ERC721ReserveAuction;
    if (
      object.AuctionContractAddress !== undefined &&
      object.AuctionContractAddress !== null
    ) {
      message.AuctionContractAddress = object.AuctionContractAddress;
    } else {
      message.AuctionContractAddress = "";
    }
    if (
      object.ERC721ContractAddress !== undefined &&
      object.ERC721ContractAddress !== null
    ) {
      message.ERC721ContractAddress = object.ERC721ContractAddress;
    } else {
      message.ERC721ContractAddress = "";
    }
    if (object.ERC721TokenID !== undefined && object.ERC721TokenID !== null) {
      message.ERC721TokenID = object.ERC721TokenID;
    } else {
      message.ERC721TokenID = "";
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
