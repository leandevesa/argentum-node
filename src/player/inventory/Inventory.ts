import { Slot } from "./Slot";
import { Item } from "./Item";
import { AllEquipped } from "./AllEquiped";
import { isNull } from "util";

export class Inventory {

    private readonly MAX_ITEMS = 40;
    
    private _slots: Array<Slot> = new Array(this.MAX_ITEMS);
    private _equipped: AllEquipped = new AllEquipped();
    private _itemQuantity: number = 0;

    constructor () {
        for (let i = 0; i < this.MAX_ITEMS; i++) {
            this._slots[i] = new Slot(i);
        }
    }

    public addItemAndGetSlot(item: Item): number | null {
        if (this._itemQuantity < this.MAX_ITEMS) {
            const slotId = this.getFirstFreeSlotNumber();
            if (!isNull(slotId)) {
                this._slots[slotId].item = item;
                return slotId;
            }
            this._itemQuantity++;
        }
        return null;
    }
    
    public getItem(slotId: any): Item | null {
        return this._slots[slotId].item;
    }

    private getFirstFreeSlotNumber(): number | null {
        
        const emptySlots: Array<Slot> = this._slots.filter(slot => !slot.item);

        if (emptySlots.length) return emptySlots[0].id;
        
        return null;
    }
    
	public get equipped(): AllEquipped {
		return this._equipped;
	}
}