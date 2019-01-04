import { ObjectType } from "../ObjectType";
import { GameObject } from "../GameObject";

export abstract class GrabbableObject extends GameObject {

    
    constructor(id: number,
                name: string,
                grhIndex: number,
                type: ObjectType,
                private _price: number,
                private _crucial: boolean) {

        super(id, name, grhIndex, type);
    }


	public get price(): number {
		return this._price;
    }

	public get isCrucial(): boolean {
		return this._crucial;
    }
}