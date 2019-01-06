import { Equipped } from "./Equipped";

export class AllEquipped {
    private _weapon: Equipped | null;
    private _armor: Equipped | null;
    private _shield: Equipped | null;
    private _helmet: Equipped | null;
    private _ammo: Equipped | null;
    private _ring: Equipped | null;
    
	public get helmet(): Equipped | null  {
		return this._helmet;
    }
    
	public set helmet(value: Equipped | null) {
		this._helmet = value;
    }
    
	public get shield(): Equipped | null {
		return this._shield;
    }
    
	public set shield(value: Equipped | null ) {
		this._shield = value;
    }
    
	public get armor(): Equipped | null {
		return this._armor;
    }
    
	public set armor(value: Equipped | null ) {
		this._armor = value;
    }
    
	public get ring(): Equipped | null  {
		return this._ring;
    }
    
	public set ring(value: Equipped | null ) {
		this._ring = value;
    }
    
	public get ammo(): Equipped | null  {
		return this._ammo;
    }
    
	public set ammo(value: Equipped | null ) {
		this._ammo = value;
    }
    
	public get weapon(): Equipped | null {
		return this._weapon;
    }
    
	public set weapon(value: Equipped | null ) {
		this._weapon = value;
	}

}