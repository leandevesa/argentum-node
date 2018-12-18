export class Equipped {
    private _slot: number;
    private _id: number;

    constructor(slot, id) {
        this._slot = slot;
        this._id = id;
    }

    /**
     * Getter slot
     * @return {number}
     */
	public get slot(): number {
		return this._slot;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}
}