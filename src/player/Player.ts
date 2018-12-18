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

    /**
     * Getter position
     * @return {Position}
     */
	public get position(): Position {
		return this._position;
	}

    /**
     * Getter inventory
     * @return {Inventory}
     */
	public get inventory(): Inventory {
		return this._inventory;
	}

    /**
     * Getter stats
     * @return {Stats}
     */
	public get stats(): Stats {
		return this._stats;
	}

    /**
     * Getter char
     * @return {Char}
     */
	public get char(): Char {
		return this._char;
	}

    public get mail(): string {
        return this._mail;
    }
    
    public set mail(value: string) {
        this._mail = value;
    }

    public get gender(): Gender {
        return this._gender;
    }

    public set gender(value: Gender) {
        this._gender = value;
    }

    public get race(): Race {
        return this._race;
    }

    public set race(value: Race) {
        this._race = value;
    }

    public get class(): Class {
        return this._class;
    }

    public set class(value: Class) {
        this._class = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get flags(): Flags {
        return this._flags;
    }
}