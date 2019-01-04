import { ObjectType } from "../ObjectType";
import { GrabbableObject } from "./GrabbableObject";
import { isNullOrUndefined } from "util";

export class Drink extends GrabbableObject {

    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number,
                crucial: boolean,
                type: ObjectType,
                private _minWater: number,
                private _minStamina: number | null) {
        
        super(id, name, grhIndex, type, price, crucial);
    }

    public get minWater(): number {
        return this._minWater;
    }

    public get minStamina(): number {
        return isNullOrUndefined(this._minStamina) ? 0 : this._minStamina;
    }
}