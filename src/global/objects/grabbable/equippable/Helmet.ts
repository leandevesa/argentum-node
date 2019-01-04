import { ObjectType } from "../../ObjectType";
import { MaxMin } from "../../../../player/stats/MaxMin";
import { ClassType } from "../../../../player/char/Class";
import { EquippableObject } from "./EquippableObject";

export class Helmet extends EquippableObject {

    private _defense: MaxMin;
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                forbiddenClasses: Array<ClassType>,
                anim: number,
                numRopaje: number,
                minDef: number,
                maxDef: number) {
        
        super(id, name, grhIndex, type, price, crucial, 
              forbiddenClasses, anim, null, numRopaje);

        this._defense = new MaxMin(minDef, maxDef);
    }

    public get defense(): MaxMin {
        return this._defense;
    }
}