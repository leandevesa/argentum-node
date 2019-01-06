import { ObjectType } from "../../ObjectType";
import { MaxMin } from "../../../../player/stats/MaxMin";
import { ClassType } from "../../../../player/char/Class";
import { EquippableObject } from "./EquippableObject";

export class Arrow extends EquippableObject {
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                forbiddenClasses: Array<ClassType>,
                minHit: number,
                maxHit: number) {
        
        super(id, name, grhIndex, type, price, crucial, 
              forbiddenClasses, null, null, null,
              new MaxMin(maxHit, minHit), new MaxMin());
    }
}