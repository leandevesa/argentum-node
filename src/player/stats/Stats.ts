import { Attributes } from "../Attributes";
import { Spells } from "./Spells";
import { MaxMin } from "./MaxMin";
import { Elu } from "./Elu";
import { Hp } from "./Hp";
import { ClassType } from "../char/Class";
import { Hit } from "./Hit";
import { Stamina } from "./Stamina";
import { Mana } from "./Mana";
import { SkillPoints } from "./SkillPoints";
import { Exp } from "./Exp";

export class Stats {
	
	constructor(private _exp: Exp,
				private _mana: Mana, 
				private _stamina: Stamina,
				private _hp: Hp, 
				private _hit: Hit,
				private _attributes: Attributes, 
				private _hunger: MaxMin,
				private _water: MaxMin,
				private _skillPoints: SkillPoints,
				private _gold: number, 
				private _elu: Elu,
				private _level: number,
				private _playerKillCount: number,
				private _skills: Array<Number>,
				private _expSkills: Array<number>,
				private _eluSkills: Array<number>,
				private _spells: Spells) {
		
		// TODO: Modificar estructura, que es expSkills?
		// TODO: Modificar estructura, que es eluSkills?
	}

    public levelUp(classType: ClassType) {
        this._level += 1;
        this._exp.substractPoints(this.elu.points);
        this._elu.update(this.level);
        this._hp.update(classType, this._attributes.constitution);
        this._hit.update(classType, this.level);
		this._stamina.update(classType);
		this._mana.update(classType, this._attributes.intelligence);
		this._skillPoints.update();
	}
	
	public get skillPoints(): number {
		return this._skillPoints.points;
	}

	public get spells(): Spells {
		return this._spells;
	}

	public get exp(): Exp {
		return this._exp;
	}

	public set exp(exp: Exp) {
		this._exp = exp;
	}

	public get elu(): Elu {
		return this._elu;
	}

	public get level(): number {
		return this._level;
	}
}