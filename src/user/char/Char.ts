import { Heading } from "./Heading";

export class Char {
    // TODO: Enum instead of number ?

    private _head: number;
    private _bodyAnim: number;
    private _weaponAnim: number;
    private _shieldAnim: number;
    private _helmetAnim: number;
    private _fx: number;
    private _loops: number;
    private _heading: Heading;

    /**
     * Getter weaponAnim
     * @return {number}
     */
	public get weaponAnim(): number {
		return this._weaponAnim;
	}

    /**
     * Getter shieldAnim
     * @return {number}
     */
	public get shieldAnim(): number {
		return this._shieldAnim;
	}

    /**
     * Getter helmetAnim
     * @return {number}
     */
	public get helmetAnim(): number {
		return this._helmetAnim;
	}

    /**
     * Getter fx
     * @return {number}
     */
	public get fx(): number {
		return this._fx;
	}

    /**
     * Getter loops
     * @return {number}
     */
	public get loops(): number {
		return this._loops;
	}

    /**
     * Getter heading
     * @return {Heading}
     */
	public get heading(): Heading {
		return this._heading;
	}

    /**
     * Setter weaponAnim
     * @param {number} value
     */
	public set weaponAnim(value: number) {
		this._weaponAnim = value;
	}

    /**
     * Setter shieldAnim
     * @param {number} value
     */
	public set shieldAnim(value: number) {
		this._shieldAnim = value;
	}

    /**
     * Setter helmetAnim
     * @param {number} value
     */
	public set helmetAnim(value: number) {
		this._helmetAnim = value;
	}

    /**
     * Setter fx
     * @param {number} value
     */
	public set fx(value: number) {
		this._fx = value;
	}

    /**
     * Setter loops
     * @param {number} value
     */
	public set loops(value: number) {
		this._loops = value;
	}

    /**
     * Setter heading
     * @param {Heading} value
     */
	public set heading(value: Heading) {
		this._heading = value;
	}

    public get bodyAnim(): number {
        return this._bodyAnim;
    }
    public set bodyAnim(value: number) {
        this._bodyAnim = value;
    }
    public get head(): number {
        return this._head;
    }
    public set head(value: number) {
        this._head = value;
    }
}