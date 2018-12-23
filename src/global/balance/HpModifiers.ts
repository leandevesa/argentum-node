import { ClassType } from "../../player/char/Class";

export class HpModifiers {
    
    private _modifiers: Array<number> = new Array();

    constructor(data: any) {
        this._modifiers[ClassType.Warrior] = data.warrior;
        this._modifiers[ClassType.Hunter] = data.hunter;
        this._modifiers[ClassType.Paladin] = data.paladin;
        this._modifiers[ClassType.Assassin] = data.assasin;
        this._modifiers[ClassType.Cleric] = data.cleric;
        this._modifiers[ClassType.Bard] = data.bard;
        this._modifiers[ClassType.Wizard] = data.wizard;
        this._modifiers[ClassType.Druid] = data.druid;
    }
    
    public get(classType: ClassType): number {
        return this._modifiers[classType];
    }
}