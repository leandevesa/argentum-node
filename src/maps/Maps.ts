import { FixedArray } from "../global/FixedArray";
import { Map } from "./Map";

export module Maps {

    export const MAX_MAPS = 300;
    export const MAX_TILES = 100;

    let _maps: FixedArray<Map>;

    export function setMaps(maps: FixedArray<Map>) {
        _maps = maps
    }

    export function getMap(mapNumber: number): Map {
        const map = _maps.get(mapNumber);
        if (map) {
            return map;
        } else {
            throw new Error(`Map not found: ${mapNumber}`);
        }
    }
}