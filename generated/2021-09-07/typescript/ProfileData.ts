/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Address } from "./Address";
import { Link } from "./Link";

export const protobufPackage = "metadata";

export interface ProfileData {
  Addresses: Address[];
  DisplayName: string;
  ProfilePicture: Link | undefined;
  Biography: string;
  Discord: string;
  Twitter: string;
}

const baseProfileData: object = {
  DisplayName: "",
  Biography: "",
  Discord: "",
  Twitter: "",
};

export const ProfileData = {
  encode(
    message: ProfileData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Addresses) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.DisplayName !== "") {
      writer.uint32(18).string(message.DisplayName);
    }
    if (message.ProfilePicture !== undefined) {
      Link.encode(message.ProfilePicture, writer.uint32(26).fork()).ldelim();
    }
    if (message.Biography !== "") {
      writer.uint32(34).string(message.Biography);
    }
    if (message.Discord !== "") {
      writer.uint32(42).string(message.Discord);
    }
    if (message.Twitter !== "") {
      writer.uint32(50).string(message.Twitter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfileData } as ProfileData;
    message.Addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Addresses.push(Address.decode(reader, reader.uint32()));
          break;
        case 2:
          message.DisplayName = reader.string();
          break;
        case 3:
          message.ProfilePicture = Link.decode(reader, reader.uint32());
          break;
        case 4:
          message.Biography = reader.string();
          break;
        case 5:
          message.Discord = reader.string();
          break;
        case 6:
          message.Twitter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileData {
    const message = { ...baseProfileData } as ProfileData;
    message.Addresses = [];
    if (object.Addresses !== undefined && object.Addresses !== null) {
      for (const e of object.Addresses) {
        message.Addresses.push(Address.fromJSON(e));
      }
    }
    if (object.DisplayName !== undefined && object.DisplayName !== null) {
      message.DisplayName = String(object.DisplayName);
    } else {
      message.DisplayName = "";
    }
    if (object.ProfilePicture !== undefined && object.ProfilePicture !== null) {
      message.ProfilePicture = Link.fromJSON(object.ProfilePicture);
    } else {
      message.ProfilePicture = undefined;
    }
    if (object.Biography !== undefined && object.Biography !== null) {
      message.Biography = String(object.Biography);
    } else {
      message.Biography = "";
    }
    if (object.Discord !== undefined && object.Discord !== null) {
      message.Discord = String(object.Discord);
    } else {
      message.Discord = "";
    }
    if (object.Twitter !== undefined && object.Twitter !== null) {
      message.Twitter = String(object.Twitter);
    } else {
      message.Twitter = "";
    }
    return message;
  },

  toJSON(message: ProfileData): unknown {
    const obj: any = {};
    if (message.Addresses) {
      obj.Addresses = message.Addresses.map((e) =>
        e ? Address.toJSON(e) : undefined
      );
    } else {
      obj.Addresses = [];
    }
    message.DisplayName !== undefined &&
      (obj.DisplayName = message.DisplayName);
    message.ProfilePicture !== undefined &&
      (obj.ProfilePicture = message.ProfilePicture
        ? Link.toJSON(message.ProfilePicture)
        : undefined);
    message.Biography !== undefined && (obj.Biography = message.Biography);
    message.Discord !== undefined && (obj.Discord = message.Discord);
    message.Twitter !== undefined && (obj.Twitter = message.Twitter);
    return obj;
  },

  fromPartial(object: DeepPartial<ProfileData>): ProfileData {
    const message = { ...baseProfileData } as ProfileData;
    message.Addresses = [];
    if (object.Addresses !== undefined && object.Addresses !== null) {
      for (const e of object.Addresses) {
        message.Addresses.push(Address.fromPartial(e));
      }
    }
    if (object.DisplayName !== undefined && object.DisplayName !== null) {
      message.DisplayName = object.DisplayName;
    } else {
      message.DisplayName = "";
    }
    if (object.ProfilePicture !== undefined && object.ProfilePicture !== null) {
      message.ProfilePicture = Link.fromPartial(object.ProfilePicture);
    } else {
      message.ProfilePicture = undefined;
    }
    if (object.Biography !== undefined && object.Biography !== null) {
      message.Biography = object.Biography;
    } else {
      message.Biography = "";
    }
    if (object.Discord !== undefined && object.Discord !== null) {
      message.Discord = object.Discord;
    } else {
      message.Discord = "";
    }
    if (object.Twitter !== undefined && object.Twitter !== null) {
      message.Twitter = object.Twitter;
    } else {
      message.Twitter = "";
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
