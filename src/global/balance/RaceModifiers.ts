import { RaceType } from "../../player/char/Race";

export interface RaceModifier {
    strength: number;
    agility: number;
    intelligence: number;
    charisma: number;
    constitution: number;
}

export class RaceModifiers {
    
    private _modifiers: Array<RaceModifier> = new Array();

    constructor (data: any) {
        this._modifiers[RaceType.Human] = data.human;
        this._modifiers[RaceType.Elf] = data.elf;
        this._modifiers[RaceType.DarkElf] = data.darkElf;
        this._modifiers[RaceType.Dwarf] = data.dwarf;
        this._modifiers[RaceType.Gnome] = data.gnome;
    }
    
	public get(raceType: RaceType): RaceModifier {
		return this._modifiers[raceType]
    }
}