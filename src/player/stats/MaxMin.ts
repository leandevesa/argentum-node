export class MaxMin {
    private _max: number;
    private _min: number;

    constructor(max: number = 0, min: number = 0) {
        this._max = max;
        this._min = min;
    }

	public get max(): number {
		return this._max;
	}

	public get min(): number {
		return this._min;
	}

	public set max(value: number) {
		this._max = value;
    }
    
	public set min(value: number) {
		this._min = value;
	}
}