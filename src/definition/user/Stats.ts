import { Attributes } from "../../user/Attributes";

export class Stats {
	private _gold: number;
	private _maxHp: number;
	private _minHp: number;
	private _maxSta: number;
	private _minSta: number;
	private _maxMan: number;
	private _minMan: number;
	private _maxHit: number;
	private _minHit: number;
	private _maxHun: number;
	private _minHun: number;
	private _maxWat: number;
    private _minWat: number;
    private _exp: number;
    private _level: number;
    private _elu: number; // TODO: Modificar, que significa elu?
    private _skills: Array<number>;
    private _attributes: Attributes; // TODO: Modificar estructura
    private _spells: Array<number>; // TODO: Modificar estructura
    private _userKillCount: number;
	private _skillPts: number;
	private _expSkills: Array<number>; // TODO: Modificar estructura, que es expSkills?
    private _eluSkills: Array<number>; // TODO: Modificar estructura, que es eluSkills?
    

    /**
     * Getter gold
     * @return {number}
     */
	public get gold(): number {
		return this._gold;
	}

    /**
     * Getter maxHp
     * @return {number}
     */
	public get maxHp(): number {
		return this._maxHp;
	}

    /**
     * Getter minHp
     * @return {number}
     */
	public get minHp(): number {
		return this._minHp;
	}

    /**
     * Getter maxSta
     * @return {number}
     */
	public get maxSta(): number {
		return this._maxSta;
	}

    /**
     * Getter minSta
     * @return {number}
     */
	public get minSta(): number {
		return this._minSta;
	}

    /**
     * Getter maxMan
     * @return {number}
     */
	public get maxMan(): number {
		return this._maxMan;
	}

    /**
     * Getter minMan
     * @return {number}
     */
	public get minMan(): number {
		return this._minMan;
	}

    /**
     * Getter maxHit
     * @return {number}
     */
	public get maxHit(): number {
		return this._maxHit;
	}

    /**
     * Getter minHit
     * @return {number}
     */
	public get minHit(): number {
		return this._minHit;
	}

    /**
     * Getter maxHun
     * @return {number}
     */
	public get maxHun(): number {
		return this._maxHun;
	}

    /**
     * Getter minHun
     * @return {number}
     */
	public get minHun(): number {
		return this._minHun;
	}

    /**
     * Getter maxWat
     * @return {number}
     */
	public get maxWat(): number {
		return this._maxWat;
	}

    /**
     * Getter minWat
     * @return {number}
     */
	public get minWat(): number {
		return this._minWat;
	}

    /**
     * Getter exp
     * @return {number}
     */
	public get exp(): number {
		return this._exp;
	}

    /**
     * Getter level
     * @return {number}
     */
	public get level(): number {
		return this._level;
	}

    /**
     * Getter elu
     * @return {number}
     */
	public get elu(): number {
		return this._elu;
	}

    /**
     * Getter skills
     * @return {Array<number>}
     */
	public get skills(): Array<number> {
		return this._skills;
	}

    /**
     * Getter attributes
     * @return {Attributes}
     */
	public get attributes(): Attributes {
		return this._attributes;
	}

    /**
     * Getter spells
     * @return {Array<number>}
     */
	public get spells(): Array<number> {
		return this._spells;
	}

    /**
     * Getter userKillCount
     * @return {number}
     */
	public get userKillCount(): number {
		return this._userKillCount;
	}

    /**
     * Getter skillPts
     * @return {number}
     */
	public get skillPts(): number {
		return this._skillPts;
	}

    /**
     * Getter expSkills
     * @return {Array<number>}
     */
	public get expSkills(): Array<number> {
		return this._expSkills;
	}

    /**
     * Getter eluSkills
     * @return {Array<number>}
     */
	public get eluSkills(): Array<number> {
		return this._eluSkills;
	}

    /**
     * Setter gold
     * @param {number} value
     */
	public set gold(value: number) {
		this._gold = value;
	}

    /**
     * Setter maxHp
     * @param {number} value
     */
	public set maxHp(value: number) {
		this._maxHp = value;
	}

    /**
     * Setter minHp
     * @param {number} value
     */
	public set minHp(value: number) {
		this._minHp = value;
	}

    /**
     * Setter maxSta
     * @param {number} value
     */
	public set maxSta(value: number) {
		this._maxSta = value;
	}

    /**
     * Setter minSta
     * @param {number} value
     */
	public set minSta(value: number) {
		this._minSta = value;
	}

    /**
     * Setter maxMan
     * @param {number} value
     */
	public set maxMan(value: number) {
		this._maxMan = value;
	}

    /**
     * Setter minMan
     * @param {number} value
     */
	public set minMan(value: number) {
		this._minMan = value;
	}

    /**
     * Setter maxHit
     * @param {number} value
     */
	public set maxHit(value: number) {
		this._maxHit = value;
	}

    /**
     * Setter minHit
     * @param {number} value
     */
	public set minHit(value: number) {
		this._minHit = value;
	}

    /**
     * Setter maxHun
     * @param {number} value
     */
	public set maxHun(value: number) {
		this._maxHun = value;
	}

    /**
     * Setter minHun
     * @param {number} value
     */
	public set minHun(value: number) {
		this._minHun = value;
	}

    /**
     * Setter maxWat
     * @param {number} value
     */
	public set maxWat(value: number) {
		this._maxWat = value;
	}

    /**
     * Setter minWat
     * @param {number} value
     */
	public set minWat(value: number) {
		this._minWat = value;
	}

    /**
     * Setter exp
     * @param {number} value
     */
	public set exp(value: number) {
		this._exp = value;
	}

    /**
     * Setter level
     * @param {number} value
     */
	public set level(value: number) {
		this._level = value;
	}

    /**
     * Setter elu
     * @param {number} value
     */
	public set elu(value: number) {
		this._elu = value;
	}

    /**
     * Setter skills
     * @param {Array<number>} value
     */
	public set skills(value: Array<number>) {
		this._skills = value;
	}

    /**
     * Setter attributes
     * @param {Attributes} value
     */
	public set attributes(value: Attributes) {
		this._attributes = value;
	}

    /**
     * Setter spells
     * @param {Array<number>} value
     */
	public set spells(value: Array<number>) {
		this._spells = value;
	}

    /**
     * Setter userKillCount
     * @param {number} value
     */
	public set userKillCount(value: number) {
		this._userKillCount = value;
	}

    /**
     * Setter skillPts
     * @param {number} value
     */
	public set skillPts(value: number) {
		this._skillPts = value;
	}

    /**
     * Setter expSkills
     * @param {Array<number>} value
     */
	public set expSkills(value: Array<number>) {
		this._expSkills = value;
	}

    /**
     * Setter eluSkills
     * @param {Array<number>} value
     */
	public set eluSkills(value: Array<number>) {
		this._eluSkills = value;
	}

}