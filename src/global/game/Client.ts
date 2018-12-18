import { connection } from "websocket";
import { Player } from "../../player/Player";

export class Client {
    private _socket: connection;
    private _player: Player;

    constructor(socket: connection) {
        this._socket = socket;
    }

    /**
     * Getter socket
     * @return {connection}
     */
	public get socket(): connection {
		return this._socket;
	}

    /**
     * Getter player
     * @return {Player}
     */
	public get player(): Player {
		return this._player;
	}

    /**
     * Setter player
     * @param {Player} value
     */
	public set player(value: Player) {
		this._player = value;
	}
}