import { ISerializable } from "../ISerializable";
import { Serializer } from "../../../binary/Serializer";
import { SendPacketID } from "../../enums/SendPacketID";
import { FontType } from "./FontType";

export class ConsoleMsg implements ISerializable {

    constructor(private _text: string,
                private _fontType: FontType) {
                    
    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.ConsoleMsg)
            .string(this._text)
            .byte(this._fontType)
        
        return serializer.serialize();
    }
}