import { RaceModifier } from "./RaceModifier";
import { Race } from "../../player/char/Race";

export module Balance {

    let loaded: boolean = false;
    const balance = {
        "raceModifier": {
            1: 10,
            2: 10,
            3: 10,
            4: 10
        }
    };

    function checkIfLoaded(): void {
        // TODO: if not loaded -> exception
    }

    export function load(): void {
        // TODO: if loaded -> exception
        loaded = true;
    }

    export function getRaceModifier(race: Race): RaceModifier {
        return balance.raceModifier[race];
    }
}