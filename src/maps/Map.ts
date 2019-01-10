import { Player } from "../player/Player";
import { Tiles } from "./tiles/Tiles";
import { Coordinates } from "./Coordinates";

export class Map {
    
    constructor(private _isPk: boolean,
                private _tiles: Tiles) {

    }

    setPlayer(coordinates: Coordinates, player: Player) {
        this._tiles.getTileAt(coordinates.x, coordinates.y).player = player;
    }
}