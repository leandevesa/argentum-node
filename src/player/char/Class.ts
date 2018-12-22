export enum ClassType {
    Wizard = 1,
    Cleric = 2,
    Warrior = 3,
    Assassin = 4,
    // Thief = 5,
    Bard = 6,
    Druid = 7,
    // Bandit = 8,
    Paladin = 9,
    Hunter = 10,
    // Pirate = 11
}

export class Class {

    private _type: ClassType;
    
    constructor(type: ClassType) {
        this._type = type;
    }
    
	public get type(): ClassType {
		return this._type;
	}
}