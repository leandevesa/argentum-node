import { Dispatchers } from "./Dispatchers";
import { IDispatchable } from "./dispatcher/IDispatchable";

export class Message {

    public handle(user: any, message: any) {
        const packetId: number = message.binaryData[0];
        const packetData: Buffer = message.binaryData.slice(1);
        const dispatcher: IDispatchable = Dispatchers.get(packetId);
    
        dispatcher.dispatch(user, packetData);
    }
}