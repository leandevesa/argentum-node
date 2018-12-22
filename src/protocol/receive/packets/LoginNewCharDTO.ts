import { RaceType } from "../../../player/char/Race";
import { Gender } from "../../../player/char/Gender";
import { ClassType } from "../../../player/char/Class";

export class LoginNewCharDTO {

    private _username: string;
    private _password: string;
    private _verA: number; // TODO: Delete
    private _verB: number; // TODO: Delete
    private _verC: number; // TODO: Delete
    private _race: RaceType;
    private _gender: Gender;
    private _class: ClassType;
    private _head: number;
    private _mail: string;
    private _homeland: number; // TODO: Delete

    public get homeland(): number {
        return this._homeland;
    }

    public get mail(): string {
        return this._mail;
    }

    public get head(): number {
        return this._head;
    }

    public get class(): number {
        return this._class;
    }
    
    public get username(): string {
        return this._username;
    }

    public get password(): string {
        return this._password;
    }

    public get verA(): number {
        return this._verA;
    }

    public get verB(): number {
        return this._verB;
    }

    public get verC(): number {
        return this._verC;
    }

    public get race(): number {
        return this._race;
    }

    public get gender(): number {
        return this._gender;
    }
}