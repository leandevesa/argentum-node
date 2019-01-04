import { GameObject } from "./GameObject";
import { EquippableObject } from "./grabbable/equippable/EquippableObject";

export module Objects {
    
    let _objects: Array<GameObject>;

    export function setObjects(objects: Array<GameObject>): void {
        _objects = objects;
    }

    export function getEquippable(id: number): EquippableObject {
        return _objects[id] as EquippableObject;
    }
}