import { Dispatchers } from "./dispatchers/Dispatchers";
import { IDispatchable } from "./dispatchers/IDispatchable";

export class Message {

    public handle(message: any) {
        const packetId: number = message.binaryData[0];
        const packetData: Buffer = message.binaryData.slice(1);
        const dispatcher: IDispatchable = Dispatchers.get(packetId);
    
        dispatcher.dispatch(packetData);
    }
}