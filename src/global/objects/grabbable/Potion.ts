import { ObjectType } from "../ObjectType";
import { GrabbableObject } from "./GrabbableObject";

export class Potion extends GrabbableObject {
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                private _potionType: number) {
        
        super(id, name, grhIndex, type, price, crucial);
    }

    public get potionType(): number {
        return this._potionType;
    }
}