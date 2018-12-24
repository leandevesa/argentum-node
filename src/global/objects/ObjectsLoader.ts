import { Food } from "./Food";
import { ObjectBuilder } from "./ObjectBuilder";
import { isNullOrUndefined } from "util";

export module ObjectsLoader {

    const ROOT = 'dat';
    const objectBuilder = new ObjectBuilder();

    export function load() {
        const fs = require('fs');
        const data: any = JSON.parse(fs.readFileSync(`${ROOT}/objects.json`, 'utf8'));
        const objects = new Array();

        for (let id of Object.keys(data)) {
            const metaObject = data[id];
            const object = objectBuilder.build(parseInt(id), metaObject);
            if (!isNullOrUndefined(object)) {
                objects.push(object);
            }
        }
    }
}