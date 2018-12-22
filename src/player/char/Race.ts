export enum RaceType {
    Human = 1,
    Elf = 2,
    DarkElf = 3,
    Gnome = 4,
    Dwarf = 5
}

export class Race {
    private _type: RaceType;

    constructor(raceType: RaceType) {
        this._type = raceType;
    }

    public isLittle(): boolean {
        return this._type == RaceType.Gnome ||
               this._type == RaceType.Dwarf
    }
    
	public get type(): RaceType {
		return this._type;
	}

}