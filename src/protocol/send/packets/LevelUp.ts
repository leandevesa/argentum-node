import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";

export class LevelUp implements ISerializable {

    constructor(private _skillPoints: number) {

    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.LevelUp)
            .integer(this._skillPoints);
        
        return serializer.serialize();
    }
}