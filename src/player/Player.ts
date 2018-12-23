import { Char } from "./char/Char";
import { Class } from "./char/Class";
import { Gender } from "./char/Gender";
import { Race } from "./char/Race";
import { Flags } from "./Flags";
import { Stats } from "./stats/Stats";
import { Inventory } from "./inventory/Inventory";
import { Position } from "./Position";

export class Player {

    private _flags: Flags = new Flags();

    constructor(private _name: string, 
                private _mail: string,
                private _class: Class,
                private _race: Race, 
                private _gender: Gender,
                private _stats: Stats,
                private _char: Char,
                private _position: Position,
                private _inventory: Inventory,
                private _clientIndex: number) {
                    
    }

    public levelUp() {
        this._stats.levelUp(this.class.type);
    }

	public get position(): Position {
		return this._position;
    }
    
	public get inventory(): Inventory {
		return this._inventory;
    }
    
	public get stats(): Stats {
		return this._stats;
    }

    public get mail(): string {
        return this._mail;
    }

    public get gender(): Gender {
        return this._gender;
    }

    public get race(): Race {
        return this._race;
    }

    public get class(): Class {
        return this._class;
    }

    public get name(): string {
        return this._name;
    }
    
    public get flags(): Flags {
        return this._flags;
    }
    
    public get char(): Char {
        return this._char;
    }
    
	public get clientIndex(): number {
		return this._clientIndex;
    }
}