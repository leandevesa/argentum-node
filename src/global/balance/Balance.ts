import { RaceModifier } from "./RaceModifier";
import { Race } from "../../user/char/Race";

export module Balance {

    let loaded: boolean = false;
    const balance = {
        "raceModifier": 10
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