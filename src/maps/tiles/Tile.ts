import { Player } from "../../player/Player";

export class Tile {

    private _player: Player;

    constructor(private _graphic1: number,
                private _graphic2: number | null,
                private _graphic3: number | null,
                private _graphic4: number | null,
                private _trigger: number | null,
                private _blocked: boolean) {

    }

    public get player(): Player {
        return this._player;
    }

    public set player(player: Player) {
        this._player = player;
    }
}