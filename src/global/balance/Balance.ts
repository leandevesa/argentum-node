import { RaceModifiers, RaceModifier } from "./RaceModifiers";
import { RaceType } from "../../player/char/Race";
import { ClassType } from "../../player/char/Class";
import { HPDistribution } from "./HPDistribution";
import { HpModifiers } from "./HpModifiers";

export module Balance {
    
    let raceModifiers: RaceModifiers;
    let hpModifiers: HpModifiers;
    let hpDistribution: HPDistribution;

    export function setRaceModifiers(modifiers: RaceModifiers): void {
        raceModifiers = modifiers;
    }

    export function setHpModifiers(modifiers: HpModifiers): void {
        hpModifiers = modifiers;
    }

    export function setHpDistribution(modifiers: HPDistribution): void {
        hpDistribution = modifiers;
    }

    export function getRaceModifier(raceType: RaceType): RaceModifier {
        return raceModifiers.get(raceType);
    }

    export function getHPModifier(classType: ClassType): number {
        return hpModifiers.get(classType);
    }

    export function getHPDistribution(): HPDistribution {
        return hpDistribution;
    }
}