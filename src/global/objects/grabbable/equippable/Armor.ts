import { ObjectType } from "../../ObjectType";
import { MaxMin } from "../../../../player/stats/MaxMin";
import { ClassType } from "../../../../player/char/Class";
import { EquippableObject } from "./EquippableObject";
import { isNullOrUndefined } from "util";

export class Armor extends EquippableObject {
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                forbiddenClasses: Array<ClassType>,
                numRompaje: number,
                minDef: number,
                maxDef: number,
                private _isForLittleRaces: boolean | null) {
        
        super(id, name, grhIndex, type, price, crucial, forbiddenClasses, 
              null, null, numRompaje, new MaxMin(), new MaxMin(maxDef, minDef));
    }

    public get isForLittleRaces(): boolean {
        return isNullOrUndefined(this._isForLittleRaces) ? false : this._isForLittleRaces;
    }
}