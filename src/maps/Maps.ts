import { Player } from "../player/Player";
import { FixedArray } from "../global/FixedArray";
import { Map } from "./Map";

export module Maps {

    export const MAX_MAPS = 1;

    const maps: FixedArray<Map> = new FixedArray(MAX_MAPS);

    export function getMap(mapNumber: number): Map {
        const map = maps.get(mapNumber);
        if (map) {
            return map;
        } else {
            throw new Error(`Map not found: ${mapNumber}`);
        }
    }
}