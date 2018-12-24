import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";
import { Player } from "../../../player/Player";

export class ChangeInventorySlot implements ISerializable {

    constructor(private _player: Player,
                private _slot: number) {

    }

    public serialize(): Uint8Array {

        const inventory = this._player.inventory;
        const objIndex = inventory.getItem(this._slot);
        if (objIndex) {
            objIndex.id
        }

        const serializer = new Serializer()
            .byte(SendPacketID.ChangeInventorySlot)
            .integer(this._slot);
        
        return serializer.serialize();
    }
}