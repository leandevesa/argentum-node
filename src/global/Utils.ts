import { Race } from "../user/char/Race";

export module Utils {
    export function isLittleRace(race: Race): boolean {
        return ((race == Race.Dwarf) || (race == Race.Gnome))
    }
}