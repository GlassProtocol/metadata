/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface media_market {
  network: network;
  media_address: address | undefined;
  market_address: address | undefined;
}

const basemedia_market: object = { network: 0 };

export const media_market = {
  encode(
    message: media_market,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.media_address !== undefined) {
      address.encode(message.media_address, writer.uint32(18).fork()).ldelim();
    }
    if (message.market_address !== undefined) {
      address.encode(message.market_address, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): media_market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basemedia_market } as media_market;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.media_address = address.decode(reader, reader.uint32());
          break;
        case 3:
          message.market_address = address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): media_market {
    const message = { ...basemedia_market } as media_market;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (object.media_address !== undefined && object.media_address !== null) {
      message.media_address = address.fromJSON(object.media_address);
    } else {
      message.media_address = undefined;
    }
    if (object.market_address !== undefined && object.market_address !== null) {
      message.market_address = address.fromJSON(object.market_address);
    } else {
      message.market_address = undefined;
    }
    return message;
  },

  toJSON(message: media_market): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.media_address !== undefined &&
      (obj.media_address = message.media_address
        ? address.toJSON(message.media_address)
        : undefined);
    message.market_address !== undefined &&
      (obj.market_address = message.market_address
        ? address.toJSON(message.market_address)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<media_market>): media_market {
    const message = { ...basemedia_market } as media_market;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (object.media_address !== undefined && object.media_address !== null) {
      message.media_address = address.fromPartial(object.media_address);
    } else {
      message.media_address = undefined;
    }
    if (object.market_address !== undefined && object.market_address !== null) {
      message.market_address = address.fromPartial(object.market_address);
    } else {
      message.market_address = undefined;
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
