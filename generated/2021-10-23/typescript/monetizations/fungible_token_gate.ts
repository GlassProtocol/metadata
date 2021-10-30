/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { network, networkFromJSON, networkToJSON } from "../primitives/network";
import { address } from "../primitives/address";

export const protobufPackage = "metadata";

export interface fungible_token_gate {
  network: network;
  address: address | undefined;
  required_balance: string;
}

const basefungible_token_gate: object = { network: 0, required_balance: "" };

export const fungible_token_gate = {
  encode(
    message: fungible_token_gate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network);
    }
    if (message.address !== undefined) {
      address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.required_balance !== "") {
      writer.uint32(26).string(message.required_balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): fungible_token_gate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basefungible_token_gate } as fungible_token_gate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any;
          break;
        case 2:
          message.address = address.decode(reader, reader.uint32());
          break;
        case 3:
          message.required_balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): fungible_token_gate {
    const message = { ...basefungible_token_gate } as fungible_token_gate;
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    if (
      object.required_balance !== undefined &&
      object.required_balance !== null
    ) {
      message.required_balance = String(object.required_balance);
    } else {
      message.required_balance = "";
    }
    return message;
  },

  toJSON(message: fungible_token_gate): unknown {
    const obj: any = {};
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.address !== undefined &&
      (obj.address = message.address
        ? address.toJSON(message.address)
        : undefined);
    message.required_balance !== undefined &&
      (obj.required_balance = message.required_balance);
    return obj;
  },

  fromPartial(object: DeepPartial<fungible_token_gate>): fungible_token_gate {
    const message = { ...basefungible_token_gate } as fungible_token_gate;
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = address.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (
      object.required_balance !== undefined &&
      object.required_balance !== null
    ) {
      message.required_balance = object.required_balance;
    } else {
      message.required_balance = "";
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
