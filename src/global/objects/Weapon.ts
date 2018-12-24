import { GameObject } from "./GameObject";
import { ObjectType } from "./ObjectType";
import { MaxMin } from "../../player/stats/MaxMin";
import { RaceType, Race } from "../../player/char/Race";
import { isNullOrUndefined } from "util";
import { ClassType } from "../../player/char/Class";

export class Weapon extends GameObject {

    private _hit: MaxMin;
    
    constructor(id: number,
                name: string,
                grhIndex: number,
                price: number | null,
                crucial: boolean | null,
                type: ObjectType,
                minHit: number,
                maxHit: number,
                private _anim: number,
                private _forbiddenClasses: Array<ClassType>,
                private _littleRaceAnim?: number) {
        
        super(id, name, grhIndex, price, crucial, type);

        this._hit = new MaxMin(maxHit, minHit);
    }

    public get hit(): MaxMin {
        return this._hit;
    }

    public isForbidden(classType: ClassType): boolean {
        return this._forbiddenClasses.indexOf(classType) > -1;
    }

    public getAnim(race: Race): number {
        if (race.isLittle()) {
            if (!isNullOrUndefined(this._littleRaceAnim)) {
                return this._littleRaceAnim
            } else {
                throw new Error("No tiene anim de little")
            }
        } else {
            return this._anim;
        }
    }
}