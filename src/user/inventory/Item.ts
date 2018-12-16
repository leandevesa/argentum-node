export class Item {
    private _id: number;
    private _amount: number;
    private _equipped: boolean;

    constructor(id, amount) {
        this._id = id;
        this._amount = amount;
    }

    /**
     * Getter equipped
     * @return {boolean}
     */
	public get equipped(): boolean {
		return this._equipped;
	}

    /**
     * Setter equipped
     * @param {boolean} value
     */
	public set equipped(value: boolean) {
		this._equipped = value;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter amount
     * @return {number}
     */
	public get amount(): number {
		return this._amount;
	}
}