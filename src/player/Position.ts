import { Coordinates } from "../maps/Coordinates";

export class Position {

    private _coordinates: Coordinates = new Coordinates();
    private _map: number;
    
	public get x(): number {
		return this._coordinates.x;
    }
    
	public get y(): number {
		return this._coordinates.y;
    }
    
	public get map(): number {
		return this._map;
    }
    
	public set x(value: number) {
		this._coordinates.x = value;
    }
    
	public set y(value: number) {
		this._coordinates.y = value;
    }
    
	public set map(value: number) {
		this._map = value;
	}

}