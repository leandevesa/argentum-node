import { Map } from "./Map";
import { Maps } from "./Maps";
import { FixedArray } from "../global/FixedArray";
import { Tile } from "./tiles/Tile";
import { Tiles } from "./tiles/Tiles";

export module MapsLoader {

    const ROOT = 'dat/maps';

    export function load() {
		console.log("Loading maps..");
        const fs = require('fs');
        const mapFile: any = JSON.parse(fs.readFileSync(`${ROOT}/map272.json`, 'utf8'));

        const tilesArr = new Array<Array<Tile>>();
        for (let x = 0; x < Maps.MAX_TILES; x++) {
            tilesArr[x] = new Array<Tile>();
            for (let y = 0; y < Maps.MAX_TILES; y++) {
                const meta = mapFile.tiles[x][y];
                tilesArr[x][y] = new Tile(meta.graphic1, meta.graphic2,
                                          meta.graphic3, meta.graphic4,
                                          meta.trigger, meta.blocked);

            }
        }
        
        const tiles = new Tiles(tilesArr);
        const map = new Map(mapFile.pk, tiles);
        const maps = new FixedArray<Map>(Maps.MAX_MAPS);
        maps.pushInCustomIndex(map, 272);

        Maps.setMaps(maps);
    }
}