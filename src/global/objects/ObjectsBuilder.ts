import { GameObject } from "./GameObject";
import { Food } from "./grabbable/Food";
import { ObjectType } from "./ObjectType";
import { isNullOrUndefined } from "util";
import { Weapon } from "./grabbable/equippable/Weapon";
import { ClassType } from "../../player/char/Class";
import { Tree } from "./Tree";
import { Armor } from "./grabbable/equippable/Armor";
import { Potion } from "./grabbable/Potion";
import { Drink } from "./grabbable/Drink";
import { Shield } from "./grabbable/equippable/Shield";
import { Helmet } from "./grabbable/equippable/Helmet";
import { Arrow } from "./grabbable/equippable/Arrow";

export class ObjectsBuilder {

    private builders = {
        [ObjectType.Food] : (id, data) => this.food(id, data),
        [ObjectType.Weapon] : (id, data) => this.weapon(id, data),
        [ObjectType.Tree] : (id, data) => this.tree(id, data),
        [ObjectType.Armor] : (id, data) => this.armor(id, data),
        [ObjectType.Potion] : (id, data) => this.potion(id, data),
        [ObjectType.Drink] : (id, data) => this.drink(id, data),
        [ObjectType.Shield] : (id, data) => this.shield(id, data),
        [ObjectType.Helmet] : (id, data) => this.helmet(id, data),
        [ObjectType.Arrow] : (id, data) => this.arrow(id, data)
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
                        data.crucial, data.type, data.minHunger);
    }

    private drink(id: number, data: any): Drink {
        return new Drink(id, data.name, data.grhIndex, data.price, 
                         data.crucial, data.type, data.minWater, 
                         data.minStamina);
    }

    private tree(id: number, data: any): Tree {
        return new Tree(id, data.name, data.grhIndex, data.type);
    }

    private potion(id: number, data: any): Potion {
        return new Potion(id, data.name, data.grhIndex, data.type, 
                          data.crucial, data.type, data.potionType);
    }

    private weapon(id: number, data: any): Weapon {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Weapon(id, data.name, data.grhIndex, data.price, 
                          data.crucial, data.type, forbiddenClasses, data.minHit, data.maxHit, data.anim, data.littleRaceAnim);
    }

    private arrow(id: number, data: any): Arrow {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Arrow(id, data.name, data.grhIndex, data.price, 
                         data.crucial, data.type, forbiddenClasses, data.minHit,
                         data.maxHit);
    }

    private armor(id: number, data: any): Armor {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Armor(id, data.name, data.grhIndex, data.price, 
                         data.crucial, data.type, forbiddenClasses, data.numRopaje,
                         data.minDef, data.maxDef, data.isForLittleRaces);
    }

    private shield(id: number, data: any): Shield {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Shield(id, data.name, data.grhIndex, data.price, 
                          data.crucial, data.type, forbiddenClasses, data.anim,
                          data.numRopaje, data.minDef, data.maxDef);
    }

    private helmet(id: number, data: any): Helmet {

        const forbiddenClasses: Array<ClassType> = this.getForbiddenClases(data);

        return new Helmet(id, data.name, data.grhIndex, data.price, 
                          data.crucial, data.type, forbiddenClasses, data.anim,
                          data.numRopaje, data.minDef, data.maxDef);
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