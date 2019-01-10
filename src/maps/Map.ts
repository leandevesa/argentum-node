import { Player } from "../player/Player";
import { Tiles } from "./tiles/Tiles";
import { Coordinates } from "./Coordinates";

export class Map {
    
    private tiles: Tiles = new Tiles();

    setPlayer(coordinates: Coordinates, player: Player) {
        this.tiles.getTileAt(coordinates.x, coordinates.y).player = player;
    }
}