import { Weapon } from "./Weapon";
import { Armor } from "./Armor";
import { Shield } from "./Shield";
import { Helmet } from "./Helmet";
import { Class } from "../../player/char/Class";

export module Objects {

    let loaded: boolean = false;

    function checkIfLoaded(): void {
        // TODO: if not loaded -> exception
    }

    export function load(): void {
        // TODO: if loaded -> exception
        loaded = true;
    }

    export function getArmor(objectId: number): Armor | null {
        // TODO: Ojo, si no existe tirar excepion y sacar que sea | null
        return new Armor(); // TODO
    }

    export function getShield(objectId: number): Shield | null {
        // TODO: Ojo, si no existe tirar excepion y sacar que sea | null
        return new Shield(); // TODO
    }

    export function getWeapon(objectId: number, userClass: Class): Weapon | null {
        // TODO: Ojo, si no existe tirar excepion y sacar que sea | null
        return null;//new Weapon(); // TODO
    }

    export function getHelmet(objectId: number): Helmet | null {
        // TODO: Ojo, si no existe tirar excepion y sacar que sea | null
        return new Helmet(); // TODO
    }
}