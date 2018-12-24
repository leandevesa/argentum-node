import { GameObject } from "./GameObject";
import { Food } from "./Food";
import { ObjectType } from "./ObjectType";
import { isNullOrUndefined } from "util";
import { Weapon } from "./Weapon";
import { ClassType } from "../../player/char/Class";
import { fchmod } from "fs";

export class ObjectBuilder {

    private builders = {
        [ObjectType.Food] : this.food,
        [ObjectType.Weapon] : this.weapon
    };

    public build(id: number, data: GameObject): GameObject | null {
        const builder = this.builders[data.type];
        if (!isNullOrUndefined(builder)) {
            return builder(id, data);
        }
        return null;
    }

    private food(id: number, data: any): Food {
        return new Food(id, data.name, data.grhIndex, data.price, 
                        data.crucial, data.type, data.minHunger)
    }

    private weapon(id: number, data: any): Weapon {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Weapon(id, data.name, data.grhIndex, data.price, 
                          data.crucial, data.type, data.minHit, data.maxHit,
                          data.anim, forbiddenClasses, data.littleRaceAnim);
    }

    private getForbiddenClases(data: any): Array<ClassType> {

        const forbiddenClasses: Array<ClassType> = new Array();
        
        if (data.forbiddenClasses) {
            data.forbiddenClasses.forEach(fc => {
                const classType = ClassType[fc];
                if (!isNullOrUndefined(classType)) {
                    forbiddenClasses.push(<any>classType);
                }
            });
        }

        return forbiddenClasses;
    }
}