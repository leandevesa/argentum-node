import { ObjectType } from "../ObjectType";
import { GrabbableObject } from "./GrabbableObject";

export class Food extends GrabbableObject {

    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                private _minHunger: number) {
        
        super(id, name, grhIndex, type, price, crucial);
    }

    public get minHunger(): number {
        return this._minHunger;
    }
}