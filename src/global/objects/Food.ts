import { GameObject } from "./GameObject";
import { ObjectType } from "./ObjectType";

export class Food extends GameObject {
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number | null,
                crucial: boolean | null,
                type: ObjectType,
                private _minHunger: number) {
        
        super(id, name, grhIndex, price, crucial, type);
    }

    public get minHunger(): number {
        return this._minHunger;
    }
}