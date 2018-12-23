import { Item } from "./Item";

export class Slot {

    private _item: Item | null;

    constructor(private _id: number) { }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter item
     * @return {Item }
     */
	public get item(): Item | null  {
		return this._item;
	}

    /**
     * Setter item
     * @param {Item } value
     */
	public set item(value: Item | null ) {
		this._item = value;
	}
    
}