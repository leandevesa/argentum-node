import { Char } from "./char/Char";
import { Class } from "./char/Class";
import { Gender } from "./char/Gender";
import { Race } from "./char/Race";
import { Flags } from "./Flags";
import { Stats } from "./stats/Stats";
import { Inventory } from "./inventory/Inventory";
import { Position } from "./Position";

export class Player {

    private _name: string;
    private _class: Class;
    private _race: Race;
    private _gender: Gender;
    private _mail: string; 
    private _flags: Flags = new Flags();
    private _char: Char = new Char();
    private _stats: Stats = new Stats();
    private _inventory: Inventory = new Inventory();
    private _position: Position = new Position();
    private _clientIndex: number;

    constructor(name: string, playerClass: Class, race: Race, gender: Gender,
                mail: string, clientIndex: number) {

        this._name = name;
        this._class = playerClass;
        this._race = race;
        this._gender = gender;
        this._mail = mail;
        this._clientIndex = clientIndex;
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
    
	public get char(): Char {
		return this._char;
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
    
	public get clientIndex(): number {
		return this._clientIndex;
    }
}