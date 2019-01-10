import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";

export class ChangeMap implements ISerializable {

    constructor(private _mapNumber: number) {

    }

    public serialize(): Uint8Array {

        const mapVersion = 1; // TODO: When maps

        const serializer = new Serializer()
            .byte(SendPacketID.ChangeMap)
            .byte(this._mapNumber)
            .byte(mapVersion);
        
        return serializer.serialize();
    }
}