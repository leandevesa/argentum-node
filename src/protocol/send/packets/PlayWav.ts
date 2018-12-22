import { ISerializable } from "./ISerializable";
import { WavId } from "../enums/WavId";
import { Position } from "../../../player/Position";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/Packets";

export class PlayWav implements ISerializable {

    private _wavId: WavId;
    private _position: Position;

    constructor(wavId: WavId, position: Position) {
        this._wavId = wavId;
        this._position = position;
    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.PlayWave)
            .byte(this._wavId)
            .byte(this._position.x)
            .byte(this._position.y)
        
        return serializer.serialize();
    }
}

export module PlayWavBuilder {
    export function build(wavId: WavId, position: Position) {
        return new PlayWav(wavId, position);
    }
}