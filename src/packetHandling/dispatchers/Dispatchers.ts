import { IDispatchable } from "./IDispatchable";
import { ThrowDices } from "./ThrowDices";
import { LoginNewChar } from "./LoginNewChar";

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
            // TODO: Throw No packetId found
        }
    }
}