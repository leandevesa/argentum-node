import { MaxMin } from "./MaxMin";
import { ClassType } from "../char/Class";

export class Hit {

    private readonly MAX_HIT_UNDER36 = 99;
    private readonly MAX_HIT_OVER36 = 999;
    
    private _maxMin: MaxMin = new MaxMin();

    constructor(maxMin: MaxMin) {
        this._maxMin = maxMin;
    }
    
    public update(classType: ClassType, playerLevel: number) {
        const hitIncrease: number = this.getIncrease(classType, playerLevel);
        
        this._maxMin.max += hitIncrease;
        this._maxMin.min += hitIncrease;

        if (playerLevel < 36) {
			if (this._maxMin.max > this.MAX_HIT_UNDER36) {
				this._maxMin.max = this.MAX_HIT_UNDER36;
			}
		} else {
			if (this._maxMin.max > this.MAX_HIT_OVER36) {
				this._maxMin.max = this.MAX_HIT_OVER36;
			}
        }

		if (playerLevel < 36) {
			if (this._maxMin.min > this.MAX_HIT_UNDER36) {
				this._maxMin.min = this.MAX_HIT_UNDER36;
			}
		} else {
			if (this._maxMin.min > this.MAX_HIT_OVER36) {
				this._maxMin.min = this.MAX_HIT_OVER36;
			}
		}
	}
	
	private getIncrease(classType: ClassType, playerLevel: number) {
		switch (classType) {
			case ClassType.Warrior:
			case ClassType.Hunter:
				return playerLevel > 35 ? 2 : 3;
			case ClassType.Assassin:
			case ClassType.Paladin:
				return playerLevel > 35 ? 1 : 3;
			case ClassType.Wizard:
				return 1;
			case ClassType.Druid:
			case ClassType.Bard:
			case ClassType.Cleric:
				return 2;
			default:
				throw new Error(`Invalid class received: ${classType}`);
		}
	}

	public get max(): number {
		return this._maxMin.max;
    }
    
	public get min(): number {
		return this._maxMin.min;
	} 
}