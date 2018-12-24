import { Player } from "../../player/Player";
import { ISerializable } from "./packets/ISerializable";
import { Game } from "../../game/Game";
import { isNull } from "util";

export class DataBufferer {

    public buffer(player: Player, packet: ISerializable): void {
        const buffer = Game.getOutgoingBuffer(player.clientIndex);
        if (buffer) {
            buffer.write(packet.serialize());
        }
    }

    public flush(player: Player) {
        const client = Game.getClient(player.clientIndex);
        if (!isNull(client)) {
            const socket = client.socket;
            const outgoingBuffer = client.outgoingBuffer;
            socket.sendBytes(outgoingBuffer.get())
        }
    }
}