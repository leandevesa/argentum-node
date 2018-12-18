import { Utils } from "../Utils";
import { Race } from "../../player/char/Race";

export class Weapon {

    private _anim: number;
    private _littleAnim: number;

    public getAnim(race: Race): number {
        return Utils.isLittleRace(race) ?
                this._anim :
                this._littleAnim;
    }
}