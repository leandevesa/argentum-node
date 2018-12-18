export class Position {
    private _x: number;
    private _y: number;
    private _map: number;


    /**
     * Getter x
     * @return {number}
     */
	public get x(): number {
		return this._x;
	}

    /**
     * Getter y
     * @return {number}
     */
	public get y(): number {
		return this._y;
	}

    /**
     * Getter map
     * @return {number}
     */
	public get map(): number {
		return this._map;
	}

    /**
     * Setter x
     * @param {number} value
     */
	public set x(value: number) {
		this._x = value;
	}

    /**
     * Setter y
     * @param {number} value
     */
	public set y(value: number) {
		this._y = value;
	}

    /**
     * Setter map
     * @param {number} value
     */
	public set map(value: number) {
		this._map = value;
	}

}