import { Balance } from "../../global/balance/Balance";
import { ClassType } from "../char/Class";
import { MaxMin } from "./MaxMin";

export class Hp {

    private readonly MAX_HP = 999;
    private _maxMin: MaxMin = new MaxMin();

    constructor(maxMin: MaxMin) {
        this._maxMin = maxMin;
    }
    
    public update(classType: ClassType, constitution: number) {

        const average: number = Balance.getHPModifier(classType) - 
                                ((21 - constitution) * 0.5);

        const isFullAverage: boolean = (average - Math.floor(average) != 0);
        
        const deviation: number = Balance.getHPDistribution().getDeviation(isFullAverage);
        
        this._maxMin.max += average + deviation;

        if (this._maxMin.max > this.MAX_HP) this._maxMin.max = this.MAX_HP;

        this._maxMin.min = this._maxMin.max;
    }

	public get max(): number {
		return this._maxMin.max;
    }
    
	public get min(): number {
		return this._maxMin.min;
	} 
}