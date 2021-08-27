/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface EthereumEdition {
  EditionContract: string;
  EditionId: string;
}

const baseEthereumEdition: object = { EditionContract: "", EditionId: "" };

export const EthereumEdition = {
  encode(
    message: EthereumEdition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.EditionContract !== "") {
      writer.uint32(10).string(message.EditionContract);
    }
    if (message.EditionId !== "") {
      writer.uint32(18).string(message.EditionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthereumEdition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthereumEdition } as EthereumEdition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EditionContract = reader.string();
          break;
        case 2:
          message.EditionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthereumEdition {
    const message = { ...baseEthereumEdition } as EthereumEdition;
    if (
      object.EditionContract !== undefined &&
      object.EditionContract !== null
    ) {
      message.EditionContract = String(object.EditionContract);
    } else {
      message.EditionContract = "";
    }
    if (object.EditionId !== undefined && object.EditionId !== null) {
      message.EditionId = String(object.EditionId);
    } else {
      message.EditionId = "";
    }
    return message;
  },

  toJSON(message: EthereumEdition): unknown {
    const obj: any = {};
    message.EditionContract !== undefined &&
      (obj.EditionContract = message.EditionContract);
    message.EditionId !== undefined && (obj.EditionId = message.EditionId);
    return obj;
  },

  fromPartial(object: DeepPartial<EthereumEdition>): EthereumEdition {
    const message = { ...baseEthereumEdition } as EthereumEdition;
    if (
      object.EditionContract !== undefined &&
      object.EditionContract !== null
    ) {
      message.EditionContract = object.EditionContract;
    } else {
      message.EditionContract = "";
    }
    if (object.EditionId !== undefined && object.EditionId !== null) {
      message.EditionId = object.EditionId;
    } else {
      message.EditionId = "";
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
