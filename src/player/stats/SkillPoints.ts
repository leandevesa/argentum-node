export class SkillPoints {

    public readonly POINTS_PER_LEVEL = 5;
    private _points: number = 0;

    constructor(points: number) {
        this._points = points;
    }
    
    public update() {
        this._points += this.POINTS_PER_LEVEL;
    }

	public get points(): number {
		return this._points;
    }
}