import { ObjectType } from "./ObjectType";
import { isNull } from "util";

export abstract class GameObject {

    
    constructor(private _id: number,
                private _name: string,
                private _grhIndex: number,
                private _price: number | null,
                private _crucial: boolean | null,
                private _type: ObjectType) {

    }
                
	public get id(): number {
		return this._id;
    }

	public get name(): string {
		return this._name;
    }

	public get price(): number {
		return isNull(this._price) ? 0 : this._price;
    }

	public get crucial(): boolean {
		return isNull(this._crucial) ? false : this._crucial;
    }
    
	public get grhIndex(): number {
		return this._grhIndex;
    }
    
	public get type(): ObjectType {
		return this._type;
	}

}