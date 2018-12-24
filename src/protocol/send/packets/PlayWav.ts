import { ISerializable } from "./ISerializable";
import { WavId } from "../enums/WavId";
import { Position } from "../../../player/Position";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";

export class PlayWav implements ISerializable {

    constructor(private _wavId: WavId, 
                private _position: Position) {

    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.PlayWave)
            .byte(this._wavId)
            .byte(this._position.x)
            .byte(this._position.y);
        
        return serializer.serialize();
    }
}