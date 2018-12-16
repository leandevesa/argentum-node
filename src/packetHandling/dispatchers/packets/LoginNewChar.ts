import { Gender } from "../../../character/Gender";
import { Race } from "../../../character/Race";
import { Class } from "../../../character/Class";

export class LoginNewChar {

    private _username: string;
    private _password: string;
    private _verA: number; // TODO: Delete
    private _verB: number; // TODO: Delete
    private _verC: number; // TODO: Delete
    private _race: Race;
    private _gender: Gender;
    private _class: Class;
    private _head: number;
    private _mail: string;
    private _homeland: number; // TODO: Delete

    public get homeland(): number {
        return this._homeland;
    }

    public set homeland(value: number) {
        this._homeland = value;
    }

    public get mail(): string {
        return this._mail;
    }

    public set mail(value: string) {
        this._mail = value;
    }

    public get head(): number {
        return this._head;
    }

    public set head(value: number) {
        this._head = value;
    }

    public get class(): number {
        return this._class;
    }

    public set class(value: number) {
        this._class = value;
    }
    
    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get verA(): number {
        return this._verA;
    }

    public set verA(value: number) {
        this._verA = value;
    }

    public get verB(): number {
        return this._verB;
    }

    public set verB(value: number) {
        this._verB = value;
    }

    public get verC(): number {
        return this._verC;
    }

    public set verC(value: number) {
        this._verC = value;
    }

    public get race(): number {
        return this._race;
    }

    public set race(value: number) {
        this._race = value;
    }

    public get gender(): number {
        return this._gender;
    }

    public set gender(value: number) {
        this._gender = value;
    }
}