import { Balance } from "../../global/balance/Balance";
import { RaceModifier } from "../../global/balance/RaceModifier";
import { InventoryMocker } from "./InventoryMocker";
import { User } from "../../user/User";
import { Class } from "../../user/char/Class";
import { LoginNewChar } from "../../packets/packet/LoginNewChar";
import { Heading } from "../../user/char/Heading";
import { Body } from "../../user/char/Body";
import { Attributes } from "../../user/Attributes";

export module UserMocker {

    export function mock(user: User, newCharDef: LoginNewChar): void {
        mockIni(user, newCharDef);
        mockFlags(user);
        mockStats(user);
        InventoryMocker.mock(user);
        mockSpells(user);
        mockPosition(user);
        mockLevel(user);
    }

    function mockLevel(user: User) {
        user.stats.exp = 47980556;
        CheckUserLevel(UserIndex, false);
        user.stats.minMan = user.stats.maxMan;
        user.stats.minSta = user.stats.maxSta;
    }

    function mockPosition(user: User): void {
        const MAP = 272;
        const x = (Math.random() * 82) + 72;
        const entrada = Math.random() * 2;

        let y;
        if (entrada == 0) {
            y = (Math.random() * 70) + 66;
        }
        else if (entrada == 1){
            y = (Math.random() * 49) + 45;
        }
        else if (entrada == 2){
            y = (Math.random() * 28) + 24;
        }

        user.position.map = MAP;
        user.position.x = x;
        user.position.y = y;
    }

    function mockSpells(user: User): void {
        const userClass = user.class;

        if ((userClass == Class.Warrior) || (userClass == Class.Hunter)) return;
        
        user.stats.spells.add(10); // remover paralisis
        user.stats.spells.add(24); // inmovilizar

        if ((userClass == Class.Cleric) || (userClass == Class.Wizard) || 
            (userClass == Class.Bard) || (userClass == Class.Druid)) {
            user.stats.spells.add(25); // apocalipsis
        }

        user.stats.spells.add(23); // descargar electrica
        user.stats.spells.add(15); // tormenta
        user.stats.spells.add(8); // misil magico
        //user.stats.spells.add(14); // invisibilidad
        user.stats.spells.add(5); // curar heridas graves
        user.stats.spells.add(18); // celeridad
        user.stats.spells.add(20); // fuerza
    }

    function mockIni(user: User, definition: LoginNewChar): void {
        user.name = definition.username;
        user.class = definition.class;
        user.race = definition.race;
        user.gender = definition.gender;
        user.mail = definition.mail;
        user.char.heading = Heading.South;
        user.char.bodyAnim = Body[Body[definition.race]]; // OK?
        user.char.head = definition.head;
    }

    function mockFlags(user: User): void {
        user.flags.death = false;
        user.flags.hidden = false;
        user.flags.hunger = 0;
        user.flags.thirst = 0;
        user.flags.naked = false;
        user.flags.paralized = false;
    }

    function mockStats(user: User): void {
        // Mock attributes (force dices in 18)
        const attributes: Attributes = new Attributes();
        const raceModifier: RaceModifier = Balance.getRaceModifier(user.race);
        attributes.strength = 18 + raceModifier.strength;
        attributes.agility = 18 + raceModifier.agility;
        attributes.intelligence = 18 + raceModifier.intelligence;
        attributes.charisma = 18 + raceModifier.charisma;
        attributes.constitution = 18 + raceModifier.constitution;
        user.stats.attributes = attributes;
    
        // TODO: Al cambiar la estructura de skills, eluskills y expskills ver de volar
        // el numskills de abajo y cambiar la forma en la que se mockea esto
        const NUMSKILLS = 20;
        for (let i = 1; i <= NUMSKILLS; i++) {
            user.stats.skills[i] = 100;
            user.stats.eluSkills[i] = 0;
            user.stats.expSkills[i] = 0;
        }

        user.stats.skillPts = 0;
        
        const hpRandom = (Math.random() * (user.stats.attributes.constitution / 3)) + 1;
        user.stats.maxHp = 15 + hpRandom;
        user.stats.minHp = 15 + hpRandom;
    
        const staRandom = (Math.random() * (user.stats.attributes.agility / 6)) + 2;
        user.stats.maxSta = 20 * staRandom;
        user.stats.minSta = 20 * staRandom;
    
        user.stats.maxWat = 100;
        user.stats.minWat = 100;

        user.stats.maxHun = 100;
        user.stats.minHun = 100;

        switch (user.class) {

            case (Class.Wizard):
                const mana = user.stats.attributes.intelligence * 3;
                user.stats.maxMan = mana;
                user.stats.minMan = mana;
                break;

            case (Class.Cleric):
            case (Class.Druid):
            case (Class.Bard):
            case (Class.Assassin):
            // case (Class.Bandit): TODO: No se usa?
                user.stats.maxMan = 50;
                user.stats.minMan = 50;

            default:
                user.stats.maxMan = 0;
                user.stats.minMan = 0;
        }
    
        user.stats.maxHit = 2;
        user.stats.minHit = 1;
        user.stats.gold = 0;
        user.stats.exp = 0;
        user.stats.elu = 300;
        user.stats.level = 1;
        user.stats.userKillCount = 0;
    }
}