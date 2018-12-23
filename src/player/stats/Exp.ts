export class Exp {
    
    private _points: number;

    constructor(points: number) {
        this._points = points;
    }
	
	public addPoints(value: number) {
		this._points += value;
	}
	
	public substractPoints(value: number) {
		this._points -= value;
	}

	public reset() {
		this._points = 0;
	}

	public get points(): number {
		return this._points;
	} 
}