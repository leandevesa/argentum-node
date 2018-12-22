import { Player } from "../../player/Player";
import { ISerializable } from "./packets/ISerializable";
import { Sender } from "./senders/Sender";

export class DataSender {

    public send(sender: Sender, player: Player, packet: ISerializable): void {
        sender.send(player, packet.serialize().toString());
    }
}