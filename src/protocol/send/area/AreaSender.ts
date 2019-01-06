import { Player } from "../../../player/Player";
import { ISerializable } from "../packets/ISerializable";
import { Sender } from "./Sender";

export class AreaSender {

    public send(sender: Sender, player: Player, packet: ISerializable): void {
        sender.send(player, packet.serialize().toString());
    }
}