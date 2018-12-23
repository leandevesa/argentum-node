export class Elu {
    
    private _points: number;

    constructor(points: number) {
        this._points = points;
    }
    
    public update(playerLevel: number) {
		if (playerLevel < 15) {
			this._points = this._points * 1.4;
		} else if (playerLevel < 21) {
			this._points = this._points * 1.35;
		} else if (playerLevel < 26) {
			this._points = this._points * 1.3;
		} else if (playerLevel < 35) {
			this._points = this._points * 1.2;
		} else if (playerLevel < 40) {
			this._points = this._points * 1.3;
		} else {
			this._points = this._points * 1.375;
		}
	}
	
	public reset() {
		this._points = 0;
	}

	public get points(): number {
		return this._points;
	} 
}