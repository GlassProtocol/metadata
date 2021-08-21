/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "metadata";

export interface EthereumNFTMetadata {
  Image: string;
  Name: string;
  Description: string;
}

const baseEthereumNFTMetadata: object = {
  Image: "",
  Name: "",
  Description: "",
};

export const EthereumNFTMetadata = {
  encode(
    message: EthereumNFTMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Image !== "") {
      writer.uint32(10).string(message.Image);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthereumNFTMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthereumNFTMetadata } as EthereumNFTMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Image = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthereumNFTMetadata {
    const message = { ...baseEthereumNFTMetadata } as EthereumNFTMetadata;
    if (object.Image !== undefined && object.Image !== null) {
      message.Image = String(object.Image);
    } else {
      message.Image = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = String(object.Name);
    } else {
      message.Name = "";
    }
    if (object.Description !== undefined && object.Description !== null) {
      message.Description = String(object.Description);
    } else {
      message.Description = "";
    }
    return message;
  },

  toJSON(message: EthereumNFTMetadata): unknown {
    const obj: any = {};
    message.Image !== undefined && (obj.Image = message.Image);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    return obj;
  },

  fromPartial(object: DeepPartial<EthereumNFTMetadata>): EthereumNFTMetadata {
    const message = { ...baseEthereumNFTMetadata } as EthereumNFTMetadata;
    if (object.Image !== undefined && object.Image !== null) {
      message.Image = object.Image;
    } else {
      message.Image = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    } else {
      message.Name = "";
    }
    if (object.Description !== undefined && object.Description !== null) {
      message.Description = object.Description;
    } else {
      message.Description = "";
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
