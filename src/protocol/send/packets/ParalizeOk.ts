import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";

export class ParalizeOk implements ISerializable {

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.ParalizeOK);
        
        return serializer.serialize();
    }
}