import { Heading } from "./Heading";

export class Char {
    // TODO: Enums instead of numbers ?

    private _weaponAnim: number;
    private _shieldAnim: number;
    private _helmetAnim: number;
    private _fx: number;
    private _loops: number;

    constructor(private _head: number,
                private _bodyAnim: number,
                private _heading: Heading) {

    }

    public setBody(body: number) {
        this._bodyAnim = body;
    }

    public setWeapon(weapon: number) {
        this._weaponAnim = weapon;
    }

    public setShield(shield: number) {
        this._shieldAnim = shield;
    }

    public setHelmet(shield: number) {
        this._shieldAnim = shield;
    }

    public setFx(fx: number) {
        this._fx = fx;
    }

    public setLoops(loops: number) {
        this._loops = loops;
    }

	public get head(): number {
		return this._head;
	}

	public get weaponAnim(): number {
		return this._weaponAnim;
	}

	public get shieldAnim(): number {
		return this._shieldAnim;
	}

	public get helmetAnim(): number {
		return this._helmetAnim;
	}

	public get fx(): number {
		return this._fx;
	}

	public get loops(): number {
		return this._loops;
	}

	public get heading(): Heading {
		return this._heading;
	}

    public get bodyAnim(): number {
        return this._bodyAnim;
    }
    
}