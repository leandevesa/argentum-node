import { GameObject } from "./GameObject";
import { EquippableObject } from "./grabbable/equippable/EquippableObject";
import { GrabbableObject } from "./grabbable/GrabbableObject";

export module Objects {
    
    let _objects: Array<GameObject>;

    export function setObjects(objects: Array<GameObject>): void {
        _objects = objects;
    }

    export function getEquippable(id: number): EquippableObject {
        return _objects[id] as EquippableObject;
    }

    export function getGrabbable(id: number): GrabbableObject {
        return _objects[id] as GrabbableObject;
    }

    export function get(id: number): GameObject {
        return _objects[id];
    }
}