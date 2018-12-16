export class RaceModifier {
    
    private _strength: number;
    private _agility: number;
    private _intelligence: number;
    private _charisma: number;
    private _constitution: number;

    /**
     * Getter strength
     * @return {number}
     */
	public get strength(): number {
		return this._strength;
	}

    /**
     * Getter agility
     * @return {number}
     */
	public get agility(): number {
		return this._agility;
	}

    /**
     * Getter intelligence
     * @return {number}
     */
	public get intelligence(): number {
		return this._intelligence;
	}

    /**
     * Getter charisma
     * @return {number}
     */
	public get charisma(): number {
		return this._charisma;
	}

    /**
     * Getter constitution
     * @return {number}
     */
	public get constitution(): number {
		return this._constitution;
	}

    /**
     * Setter strength
     * @param {number} value
     */
	public set strength(value: number) {
		this._strength = value;
	}

    /**
     * Setter agility
     * @param {number} value
     */
	public set agility(value: number) {
		this._agility = value;
	}

    /**
     * Setter intelligence
     * @param {number} value
     */
	public set intelligence(value: number) {
		this._intelligence = value;
	}

    /**
     * Setter charisma
     * @param {number} value
     */
	public set charisma(value: number) {
		this._charisma = value;
	}

    /**
     * Setter constitution
     * @param {number} value
     */
	public set constitution(value: number) {
		this._constitution = value;
	}

}