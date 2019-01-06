import { Player } from "../../../player/Player";
import { OutgoingBufferHandler } from "./OutgoingBufferHandler";
import { ChangeInventorySlot } from "../packets/ChangeInventorySlot";

export class InventoryBufferer {

    private bufferHandler: OutgoingBufferHandler = new OutgoingBufferHandler();

    public updateAllSlots(player: Player): void {
        player.inventory.getSlots().forEach(slot => {
            this.updateSpecificSlot(player, slot.id);
        });
    }

    public updateSpecificSlot(player: Player, slotNumber: number) {
        const packet = new ChangeInventorySlot(player, slotNumber);
        this.bufferHandler
            .buffer(player, packet);
    }
}