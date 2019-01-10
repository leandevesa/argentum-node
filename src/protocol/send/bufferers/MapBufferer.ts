import { Player } from "../../../player/Player";
import { OutgoingBufferHandler } from "./OutgoingBufferHandler";
import { ChangeMap } from "../packets/ChangeMap";

export class MapBufferer {

    private bufferHandler: OutgoingBufferHandler = new OutgoingBufferHandler();

    public change(player: Player): void {
        const packet = new ChangeMap(player.position.map);
        this.bufferHandler.buffer(player, packet);
    }
}