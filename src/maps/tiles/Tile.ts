import { Player } from "../../player/Player";

export class Tile {
    
    private _player: Player;

    public get player(): Player {
        return this._player;
    }

    public set player(player: Player) {
        this._player = player;
    }
}