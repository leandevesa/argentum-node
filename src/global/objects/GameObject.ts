import { ObjectType } from "./ObjectType";

export abstract class GameObject {

    
    constructor(private _id: number,
                private _name: string,
                private _grhIndex: number,
                private _type: ObjectType) {

    }
                
	public get id(): number {
		return this._id;
    }

	public get name(): string {
		return this._name;
    }
    
	public get grhIndex(): number {
		return this._grhIndex;
    }
    
	public get type(): ObjectType {
		return this._type;
	}

}