import { Food } from "./grabbable/Food";
import { ObjectsBuilder } from "./ObjectsBuilder";
import { isNullOrUndefined } from "util";
import { GameObject } from "./GameObject";
import { Objects } from "./Objects";

export module ObjectsLoader {

    const ROOT = 'dat';
    const objectsBuilder = new ObjectsBuilder();

    export function load() {
		console.log("Loading objects..");
        const fs = require('fs');
        const data: any = JSON.parse(fs.readFileSync(`${ROOT}/objects.json`, 'utf8'));
        const objects = new Array<GameObject>();

        for (let id of Object.keys(data)) {
            const metaObject = data[id];
            const object = objectsBuilder.build(parseInt(id), metaObject);
            if (!isNullOrUndefined(object)) {
                objects[id] = object;
            }
        }

        Objects.setObjects(objects);
    }
}