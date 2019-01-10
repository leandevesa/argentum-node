import { Tile } from "./Tile";

export class Tiles {
    
    private readonly TILES_QUANTITY = 100;
    private tiles: Array<Array<Tile>>;

    constructor() {
        for (var x = 0; x < this.TILES_QUANTITY; x++) {
            for (var y = 0; y < this.TILES_QUANTITY; y++) {
                this.tiles[x][y] = new Tile();
            }
        }
    }

    getTileAt(x: number, y: number): Tile {
        return this.tiles[x][y];
    }
}