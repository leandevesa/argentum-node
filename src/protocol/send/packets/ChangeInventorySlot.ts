import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";
import { Player } from "../../../player/Player";
import { Objects } from "../../../global/objects/Objects";
import { isNullOrUndefined } from "util";
import { MaxMin } from "../../../player/stats/MaxMin";
import { GrabbableObject } from "../../../global/objects/grabbable/GrabbableObject";
import { EquippableObject } from "../../../global/objects/grabbable/equippable/EquippableObject";

export class ChangeInventorySlot implements ISerializable {

    constructor(private _player: Player,
                private _slotNumber: number) {

    }

    public serialize(): Uint8Array {

        const serializer = new Serializer();
        const inventory = this._player.inventory;
        const item = inventory.getItem(this._slotNumber);

        if (!isNullOrUndefined(item)) {
            
            const grabbable: GrabbableObject = Objects.getGrabbable(item.id);

            let hit = new MaxMin();
            let defense = new MaxMin();

            if (grabbable.isEquippable()) {
                const equippable = grabbable as EquippableObject;
                hit = equippable.hit;
                defense = equippable.defense;
            }

            serializer
                .byte(SendPacketID.ChangeInventorySlot)
                .byte(this._slotNumber)
                .integer(item.id)
                .string(grabbable.name)
                .integer(item.amount)
                .boolean(item.equipped)
                .integer(grabbable.grhIndex)
                .byte(grabbable.type)
                .integer(hit.max)
                .integer(hit.min)
                .integer(defense.max)
                .integer(defense.min)
                .single(grabbable.price);
            
            // TODO: En realidad el grabbable.price sale de Comercio.cpp (SalePrice)
        }
        
        return serializer.serialize();
    }
}