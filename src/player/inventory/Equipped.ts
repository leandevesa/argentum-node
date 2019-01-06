export class Equipped {
    private _slot: number;
    private _id: number;

    constructor(slot, id) {
        this._slot = slot;
        this._id = id;
    }
    
	public get slot(): number {
		return this._slot;
    }
    
	public get id(): number {
		return this._id;
	}
}