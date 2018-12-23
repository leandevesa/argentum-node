import { MaxMin } from "./MaxMin";
import { ClassType } from "../char/Class";

export class Stamina {

    private readonly MAX_STAMINA = 999;
    private _maxMin: MaxMin = new MaxMin();

    constructor(maxMin: MaxMin) {
        this._maxMin = maxMin;
    }
    
    public update(classType: ClassType) {
        
        this._maxMin.max += this.getIncrease(classType);

		if (this._maxMin.max > this.MAX_STAMINA) {
			this._maxMin.max = this.MAX_STAMINA;
		}
	}
	
	private getIncrease(classType: ClassType) {
		const staminaDefault = 15;

        switch (classType) {
            case ClassType.Wizard:
                return staminaDefault - 1;
            default:
                return staminaDefault;
        }
	}

	public get max(): number {
		return this._maxMin.max;
    }
    
	public get min(): number {
		return this._maxMin.min;
	} 
}