/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ProfileData } from "./ProfileData";
import { Signature } from "./Signature";

export const protobufPackage = "metadata";

export interface ProfileMetadata {
  Version: string;
  Data: ProfileData | undefined;
  Signatures: Signature[];
}

const baseProfileMetadata: object = { Version: "" };

export const ProfileMetadata = {
  encode(
    message: ProfileMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }
    if (message.Data !== undefined) {
      ProfileData.encode(message.Data, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.Signatures) {
      Signature.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfileMetadata } as ProfileMetadata;
    message.Signatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Version = reader.string();
          break;
        case 2:
          message.Data = ProfileData.decode(reader, reader.uint32());
          break;
        case 3:
          message.Signatures.push(Signature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileMetadata {
    const message = { ...baseProfileMetadata } as ProfileMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = String(object.Version);
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = ProfileData.fromJSON(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(Signature.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ProfileMetadata): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = message.Version);
    message.Data !== undefined &&
      (obj.Data = message.Data ? ProfileData.toJSON(message.Data) : undefined);
    if (message.Signatures) {
      obj.Signatures = message.Signatures.map((e) =>
        e ? Signature.toJSON(e) : undefined
      );
    } else {
      obj.Signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProfileMetadata>): ProfileMetadata {
    const message = { ...baseProfileMetadata } as ProfileMetadata;
    message.Signatures = [];
    if (object.Version !== undefined && object.Version !== null) {
      message.Version = object.Version;
    } else {
      message.Version = "";
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = ProfileData.fromPartial(object.Data);
    } else {
      message.Data = undefined;
    }
    if (object.Signatures !== undefined && object.Signatures !== null) {
      for (const e of object.Signatures) {
        message.Signatures.push(Signature.fromPartial(e));
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
