import { ObjectType } from "../../ObjectType";
import { MaxMin } from "../../../../player/stats/MaxMin";
import { ClassType } from "../../../../player/char/Class";
import { EquippableObject } from "./EquippableObject";

export class Weapon extends EquippableObject {

    private _hit: MaxMin;
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                forbiddenClasses: Array<ClassType>,
                anim: number,
                littleRaceAnim: number | null,
                minHit: number,
                maxHit: number) {
        
        super(id, name, grhIndex, type, price, crucial, 
              forbiddenClasses, anim, littleRaceAnim, null);

        this._hit = new MaxMin(maxHit, minHit);
    }

    public get hit(): MaxMin {
        return this._hit;
    }
}