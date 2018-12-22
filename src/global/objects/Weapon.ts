import { Race } from "../../player/char/Race";

export class Weapon {

    private _anim: number;
    private _littleAnim: number;

    public getAnim(race: Race): number {
        return race.isLittle() ?
                this._anim :
                this._littleAnim;
    }
}