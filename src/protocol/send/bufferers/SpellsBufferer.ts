import { Player } from "../../../player/Player";
import { OutgoingBufferHandler } from "./OutgoingBufferHandler";

export class SpellsBufferer {

    private bufferHandler: OutgoingBufferHandler = new OutgoingBufferHandler();

    public updateAllSlots(player: Player): void {
        // TODO: When spells
    }

    public updateSpecificSlot(player: Player, slotNumber: number) {
        // TODO: When spells
    }
}