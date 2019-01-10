import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";

export class UserIndexInServer implements ISerializable {

    constructor(private _userIndex: number) {

    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.UserIndexInServer)
            .integer(this._userIndex);
        
        return serializer.serialize();
    }
}