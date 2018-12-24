import { connection } from "websocket";
import { Player } from "../player/Player";
import { OutgoingBuffer } from "../protocol/send/OutgoingBuffer";

export class Client {

    private _player: Player;

    constructor(private _socket: connection,
                private _outgoingBuffer: OutgoingBuffer) {
        
    }
    
	public get socket(): connection {
		return this._socket;
    }
    
	public get player(): Player {
		return this._player;
    }
    
	public get outgoingBuffer(): OutgoingBuffer {
		return this._outgoingBuffer;
    }
    
	public set player(value: Player) {
		this._player = value;
	}
}