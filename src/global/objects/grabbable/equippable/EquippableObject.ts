import { ObjectType } from "../../ObjectType";
import { GrabbableObject } from "../GrabbableObject";
import { ClassType } from "../../../../player/char/Class";
import { Race } from "../../../../player/char/Race";
import { isNullOrUndefined } from "util";
import { MaxMin } from "../../../../player/stats/MaxMin";

export abstract class EquippableObject extends GrabbableObject {

    constructor(id: number,
                name: string,
                grhIndex: number,
                type: ObjectType,
                price: number,
                crucial: boolean,
                private _forbiddenClasses: Array<ClassType>,
                private _anim: number | null,
                private _littleRaceAnim: number | null,
                private _numRompaje: number | null,
                private _hit: MaxMin,
                private _defense: MaxMin) {

        super(id, name, grhIndex, type, price, crucial);
    }

    public isForbidden(classType: ClassType): boolean {
        return this._forbiddenClasses.indexOf(classType) > -1;
    }

    public get hit(): MaxMin {
        return this._hit;
    }

    public get defense(): MaxMin {
        return this._defense;
    }

    public getNumRompaje(): number {
        if (!isNullOrUndefined(this._numRompaje)) {
            return this._numRompaje;
        } else {
            throw new Error(`numRompaje not found: ${this.name}`);
        }
    }

    public getAnim(race: Race): number {
        if (race.isLittle()) {
            if (!isNullOrUndefined(this._littleRaceAnim)) {
                return this._littleRaceAnim;
            } else {
                throw new Error(`Anim not found for little race: ${this.name}`);
            }
        } else {
            if (!isNullOrUndefined(this._anim)) {
                return this._anim;
            } else {
                throw new Error(`Anim not found: ${this.name}`);
            }
        }
    }

    public isEquippable(): boolean {
        return true;
    }
}