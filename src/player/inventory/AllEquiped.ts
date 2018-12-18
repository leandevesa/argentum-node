import { Equipped } from "./Equipped";

export class AllEquipped {
    private _weapon: Equipped | null;
    private _armor: Equipped | null;
    private _shield: Equipped | null;
    private _helmet: Equipped | null;
    private _ammo: Equipped | null;
    private _ring: Equipped | null;


    /**
     * Getter helmet
     * @return {Equipped }
     */
	public get helmet(): Equipped | null  {
		return this._helmet;
	}

    /**
     * Setter helmet
     * @param {Equipped } value
     */
	public set helmet(value: Equipped | null) {
		this._helmet = value;
	}


    /**
     * Getter shield
     * @return {Equipped }
     */
	public get shield(): Equipped | null {
		return this._shield;
	}

    /**
     * Setter shield
     * @param {Equipped } value
     */
	public set shield(value: Equipped | null ) {
		this._shield = value;
	}


    /**
     * Getter armor
     * @return {Equipped }
     */
	public get armor(): Equipped | null {
		return this._armor;
	}

    /**
     * Setter armor
     * @param {Equipped } value
     */
	public set armor(value: Equipped | null ) {
		this._armor = value;
	}

    /**
     * Getter ring
     * @return {Equipped }
     */
	public get ring(): Equipped | null  {
		return this._ring;
	}

    /**
     * Setter ring
     * @param {Equipped } value
     */
	public set ring(value: Equipped | null ) {
		this._ring = value;
	}

    /**
     * Getter ammo
     * @return {Equipped }
     */
	public get ammo(): Equipped | null  {
		return this._ammo;
	}

    /**
     * Setter ammo
     * @param {Equipped } value
     */
	public set ammo(value: Equipped | null ) {
		this._ammo = value;
	}


    /**
     * Getter weapon
     * @return {Equipped }
     */
	public get weapon(): Equipped | null {
		return this._weapon;
	}

    /**
     * Setter weapon
     * @param {Equipped } value
     */
	public set weapon(value: Equipped | null ) {
		this._weapon = value;
	}

}