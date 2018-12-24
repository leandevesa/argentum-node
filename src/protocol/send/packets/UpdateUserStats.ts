import { ISerializable } from "./ISerializable";
import { Serializer } from "../../binary/Serializer";
import { SendPacketID } from "../enums/SendPacketID";
import { Player } from "../../../player/Player";

export class UpdateUserStats implements ISerializable {

    constructor(private _player: Player) {

    }

    public serialize(): Uint8Array {
        const serializer = new Serializer()
            .byte(SendPacketID.UpdateUserStats)
            .integer(this._player.stats.hp.max)
            .integer(this._player.stats.hp.min)
            .integer(this._player.stats.mana.max)
            .integer(this._player.stats.mana.min)
            .integer(this._player.stats.stamina.max)
            .integer(this._player.stats.stamina.min)
            .long(this._player.stats.gold)
            .byte(this._player.stats.level)
            .long(this._player.stats.elu.points)
            .long(this._player.stats.exp.points);
            
        
        return serializer.serialize();
    }
}