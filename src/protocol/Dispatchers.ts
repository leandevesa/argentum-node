import { IDispatchable } from "./dispatcher/IDispatchable";
import { ThrowDices } from "./dispatcher/ThrowDices";
import { LoginNewChar } from "./dispatcher/LoginNewChar";

const dispatchers = {
    1: ThrowDices,
    2: LoginNewChar
};

export module Dispatchers {
    export function get(packetId: number): IDispatchable {
        const dispatcher: any = dispatchers[packetId];
        if (dispatcher) {
            return new dispatcher();
        } else {
            throw new Error(`No dispatcher found for packet: ${packetId}`);
        }
    }
}