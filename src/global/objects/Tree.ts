import { ObjectType } from "./ObjectType";
import { GameObject } from "./GameObject";

export class Tree extends GameObject {

    
    constructor(id: number,
                name: string,
                grhIndex: number,
                type: ObjectType) {

        super(id, name, grhIndex, type);
    }
}