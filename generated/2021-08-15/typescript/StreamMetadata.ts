/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StreamData } from "./StreamData";

export const protobufPackage = "metadata";

export interface StreamMetadata {
  Version: string;
  Data: StreamData | undefined;
  Signatures: string[];
}

const baseStreamMetadata: object = { Version: "", Signatures: "" };

export const StreamMetadata = {
  encode(
    message: StreamMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }
    if (message.Data !== undefined) {
      StreamData.encode(message.Data, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.Signatures) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamMetadata } as StreamMetadata;
    message.Signatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Version = reader.string();
          break;
        case 2:
          message.Data = StreamData.decode(reader, reader.uint32());
          break;
        case 3:
          message.Signatures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamMetadata {
    const message = { ...baseStreamMetadata } as StreamMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = String(object.Version);
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = StreamData.fromJSON(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: StreamMetadata): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = message.Version);
    message.Data !== undefined &&
      (obj.Data = message.Data ? StreamData.toJSON(message.Data) : undefined);
    if (message.Signatures) {
      obj.Signatures = message.Signatures.map((e) => e);
    } else {
      obj.Signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamMetadata>): StreamMetadata {
    const message = { ...baseStreamMetadata } as StreamMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = object.Version;
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = StreamData.fromPartial(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(e);
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
