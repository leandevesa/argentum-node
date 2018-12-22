import { RaceModifier } from "./RaceModifier";
import { Race } from "../../player/char/Race";
import { Class } from "../../player/char/Class";
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

    export function getRaceModifier(race: Race): RaceModifier {
        return raceModifiers[race.type];
    }

    export function getHPModifier(playerClass: Class): number {
        return hpModifier[playerClass.type];
    }

    export function getHPDistribution(): HPDistribution {
        return hpDistribution;
    }
}