import { Dispatchers } from "./Dispatchers";
import { IDispatchable } from "./dispatcher/IDispatchable";
import { IMessage } from "websocket";

export module Message {

    export function handle(clientIndex: number, message: IMessage) {
        if (message.binaryData) {
            const packetId: number = message.binaryData[0];
            const packetData: Buffer = message.binaryData.slice(1);
            const dispatcher: IDispatchable = Dispatchers.get(packetId);
        
            dispatcher.dispatch(clientIndex, packetData);
        }
    }
}