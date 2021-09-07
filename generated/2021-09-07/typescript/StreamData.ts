/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Address } from "./Address";
import { Link } from "./Link";
import { Monetization } from "./Monetization";

export const protobufPackage = "metadata";

export interface StreamData {
  CreatorAddress: Address | undefined;
  CreatedDate: number;
  StreamTitle: string;
  StreamDescription: string;
  StreamPoster: Link | undefined;
  StreamID: string;
  SessionID: string;
  Monetization: Monetization[];
}

const baseStreamData: object = {
  CreatedDate: 0,
  StreamTitle: "",
  StreamDescription: "",
  StreamID: "",
  SessionID: "",
};

export const StreamData = {
  encode(
    message: StreamData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.CreatorAddress !== undefined) {
      Address.encode(message.CreatorAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.CreatedDate !== 0) {
      writer.uint32(16).int64(message.CreatedDate);
    }
    if (message.StreamTitle !== "") {
      writer.uint32(26).string(message.StreamTitle);
    }
    if (message.StreamDescription !== "") {
      writer.uint32(34).string(message.StreamDescription);
    }
    if (message.StreamPoster !== undefined) {
      Link.encode(message.StreamPoster, writer.uint32(42).fork()).ldelim();
    }
    if (message.StreamID !== "") {
      writer.uint32(50).string(message.StreamID);
    }
    if (message.SessionID !== "") {
      writer.uint32(58).string(message.SessionID);
    }
    for (const v of message.Monetization) {
      Monetization.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamData } as StreamData;
    message.Monetization = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CreatorAddress = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.CreatedDate = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.StreamTitle = reader.string();
          break;
        case 4:
          message.StreamDescription = reader.string();
          break;
        case 5:
          message.StreamPoster = Link.decode(reader, reader.uint32());
          break;
        case 6:
          message.StreamID = reader.string();
          break;
        case 7:
          message.SessionID = reader.string();
          break;
        case 8:
          message.Monetization.push(
            Monetization.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamData {
    const message = { ...baseStreamData } as StreamData;
    message.Monetization = [];
    if (object.CreatorAddress !== undefined && object.CreatorAddress !== null) {
      message.CreatorAddress = Address.fromJSON(object.CreatorAddress);
    } else {
      message.CreatorAddress = undefined;
    }
    if (object.CreatedDate !== undefined && object.CreatedDate !== null) {
      message.CreatedDate = Number(object.CreatedDate);
    } else {
      message.CreatedDate = 0;
    }
    if (object.StreamTitle !== undefined && object.StreamTitle !== null) {
      message.StreamTitle = String(object.StreamTitle);
    } else {
      message.StreamTitle = "";
    }
    if (
      object.StreamDescription !== undefined &&
      object.StreamDescription !== null
    ) {
      message.StreamDescription = String(object.StreamDescription);
    } else {
      message.StreamDescription = "";
    }
    if (object.StreamPoster !== undefined && object.StreamPoster !== null) {
      message.StreamPoster = Link.fromJSON(object.StreamPoster);
    } else {
      message.StreamPoster = undefined;
    }
    if (object.StreamID !== undefined && object.StreamID !== null) {
      message.StreamID = String(object.StreamID);
    } else {
      message.StreamID = "";
    }
    if (object.SessionID !== undefined && object.SessionID !== null) {
      message.SessionID = String(object.SessionID);
    } else {
      message.SessionID = "";
    }
    if (object.Monetization !== undefined && object.Monetization !== null) {
      for (const e of object.Monetization) {
        message.Monetization.push(Monetization.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: StreamData): unknown {
    const obj: any = {};
    message.CreatorAddress !== undefined &&
      (obj.CreatorAddress = message.CreatorAddress
        ? Address.toJSON(message.CreatorAddress)
        : undefined);
    message.CreatedDate !== undefined &&
      (obj.CreatedDate = message.CreatedDate);
    message.StreamTitle !== undefined &&
      (obj.StreamTitle = message.StreamTitle);
    message.StreamDescription !== undefined &&
      (obj.StreamDescription = message.StreamDescription);
    message.StreamPoster !== undefined &&
      (obj.StreamPoster = message.StreamPoster
        ? Link.toJSON(message.StreamPoster)
        : undefined);
    message.StreamID !== undefined && (obj.StreamID = message.StreamID);
    message.SessionID !== undefined && (obj.SessionID = message.SessionID);
    if (message.Monetization) {
      obj.Monetization = message.Monetization.map((e) =>
        e ? Monetization.toJSON(e) : undefined
      );
    } else {
      obj.Monetization = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamData>): StreamData {
    const message = { ...baseStreamData } as StreamData;
    message.Monetization = [];
    if (object.CreatorAddress !== undefined && object.CreatorAddress !== null) {
      message.CreatorAddress = Address.fromPartial(object.CreatorAddress);
    } else {
      message.CreatorAddress = undefined;
    }
    if (object.CreatedDate !== undefined && object.CreatedDate !== null) {
      message.CreatedDate = object.CreatedDate;
    } else {
      message.CreatedDate = 0;
    }
    if (object.StreamTitle !== undefined && object.StreamTitle !== null) {
      message.StreamTitle = object.StreamTitle;
    } else {
      message.StreamTitle = "";
    }
    if (
      object.StreamDescription !== undefined &&
      object.StreamDescription !== null
    ) {
      message.StreamDescription = object.StreamDescription;
    } else {
      message.StreamDescription = "";
    }
    if (object.StreamPoster !== undefined && object.StreamPoster !== null) {
      message.StreamPoster = Link.fromPartial(object.StreamPoster);
    } else {
      message.StreamPoster = undefined;
    }
    if (object.StreamID !== undefined && object.StreamID !== null) {
      message.StreamID = object.StreamID;
    } else {
      message.StreamID = "";
    }
    if (object.SessionID !== undefined && object.SessionID !== null) {
      message.SessionID = object.SessionID;
    } else {
      message.SessionID = "";
    }
    if (object.Monetization !== undefined && object.Monetization !== null) {
      for (const e of object.Monetization) {
        message.Monetization.push(Monetization.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
