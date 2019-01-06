export class Flags {
    private _loggedIn: boolean;
    private _death: boolean;
    private _hidden: boolean;
    private _hunger: number;
    private _thirst: number;
    private _naked: boolean;
    private _paralized: boolean;

    public get death(): boolean {
        return this._death;
    }
    public set death(value: boolean) {
        this._death = value;
    }
    public get hidden(): boolean {
        return this._hidden;
    }
    public set hidden(value: boolean) {
        this._hidden = value;
    }
    public get hunger(): number {
        return this._hunger;
    }
    public set hunger(value: number) {
        this._hunger = value;
    }
    public get thirst(): number {
        return this._thirst;
    }
    public set thirst(value: number) {
        this._thirst = value;
    }
    public get naked(): boolean {
        return this._naked;
    }
    public set naked(value: boolean) {
        this._naked = value;
    }
    public get paralized(): boolean {
        return this._paralized;
    }
    public set paralized(value: boolean) {
        this._paralized = value;
    }
    public get loggedIn(): boolean {
        return this._loggedIn;
    }
    
    public set loggedIn(value: boolean) {
        this._loggedIn = value;
    }
}