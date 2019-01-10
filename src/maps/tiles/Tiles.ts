import { Tile } from "./Tile";

export class Tiles {
    
    constructor(private _tiles: Array<Array<Tile>>) {
    
    }

    getTileAt(x: number, y: number): Tile {
        return this._tiles[x][y];
    }
}