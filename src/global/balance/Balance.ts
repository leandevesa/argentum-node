import { RaceModifier } from "./RaceModifier";
import { RaceType } from "../../player/char/Race";
import { ClassType } from "../../player/char/Class";
import { HPDistribution } from "./HPDistribution";

export module Balance {

    let loaded: boolean = false;
    const raceModifiers: Array<RaceModifier> = new Array();
    const hpModifier: Array<number> = new Array();
    let hpDistribution: HPDistribution;

    export function load(): void {
        // TODO: load file
        loaded = true;
    }

    export function getRaceModifier(raceType: RaceType): RaceModifier {
        return raceModifiers[raceType];
    }

    export function getHPModifier(classType: ClassType): number {
        return hpModifier[classType];
    }

    export function getHPDistribution(): HPDistribution {
        return hpDistribution;
    }
}