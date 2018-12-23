import { MaxMin } from "./MaxMin";
import { ClassType } from "../char/Class";

export class Mana {
    
    private readonly MAX_MANA = 9999;
    private _maxMin: MaxMin = new MaxMin();

    constructor(maxMin: MaxMin) {
        this._maxMin = maxMin;
    }
    
    public update(classType: ClassType, intelligence: number) {
        
        this._maxMin.max += this.getIncrease(classType, intelligence);

        if (this._maxMin.max > this.MAX_MANA) {
			this._maxMin.max = this.MAX_MANA;
		}
        
	}
	
	private getIncrease(classType: ClassType, intelligence: number) {
        switch (classType) {
            case ClassType.Paladin:
            case ClassType.Assassin:
                return intelligence;
            case ClassType.Wizard:
                return 2.8 * intelligence;
            case ClassType.Cleric:
            case ClassType.Druid:
            case ClassType.Bard:
                return 2 * intelligence;
            default:
                return 0;
        }
	}

	public get max(): number {
		return this._maxMin.max;
    }
    
	public get min(): number {
		return this._maxMin.min;
	} 
}