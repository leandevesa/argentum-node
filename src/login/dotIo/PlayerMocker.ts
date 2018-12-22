import { Balance } from "../../global/balance/Balance";
import { RaceModifier } from "../../global/balance/RaceModifier";
import { InventoryMocker } from "./InventoryMocker";
import { Player } from "../../player/Player";
import { Class } from "../../player/char/Class";
import { Heading } from "../../player/char/Heading";
import { Body } from "../../player/char/Body";
import { Attributes } from "../../player/Attributes";
import { LoginNewCharDTO } from "../../protocol/receive/packets/LoginNewCharDTO";
import { Level } from "../../game/Level";
import { Race } from "../../player/char/Race";

export module PlayerMocker {

    export function mock(newCharDef: LoginNewCharDTO, clientIndex: number): Player {

        const race: Race = new Race(newCharDef.race); 

        const player: Player = new Player(newCharDef.username, newCharDef.class,
                                          race, newCharDef.gender,
                                          newCharDef.mail, clientIndex);

        mockIni(player, newCharDef);
        mockFlags(player);
        mockStats(player);
        InventoryMocker.mock(player);
        mockSpells(player);
        mockPosition(player);
        mockLevel(player);

        return player;
    }

    function mockLevel(player: Player) {
        const level:Level = new Level();

        player.stats.exp = 47980556;
        
        level.verifyLevel(player, false);
        
        player.stats.minMan = player.stats.maxMan;
        player.stats.minSta = player.stats.maxSta;
    }

    function mockPosition(player: Player): void {
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

        player.position.map = MAP;
        player.position.x = x;
        player.position.y = y;
    }

    function mockSpells(player: Player): void {
        const playerClass = player.class;

        if ((playerClass == Class.Warrior) || (playerClass == Class.Hunter)) return;
        
        player.stats.spells.add(10); // remover paralisis
        player.stats.spells.add(24); // inmovilizar

        if ((playerClass == Class.Cleric) || (playerClass == Class.Wizard) || 
            (playerClass == Class.Bard) || (playerClass == Class.Druid)) {
            player.stats.spells.add(25); // apocalipsis
        }

        player.stats.spells.add(23); // descargar electrica
        player.stats.spells.add(15); // tormenta
        player.stats.spells.add(8); // misil magico
        //player.stats.spells.add(14); // invisibilidad
        player.stats.spells.add(5); // curar heridas graves
        player.stats.spells.add(18); // celeridad
        player.stats.spells.add(20); // fuerza
    }

    function mockIni(player: Player, definition: LoginNewCharDTO): void {
        player.char.heading = Heading.South;
        player.char.bodyAnim = Body[Body[definition.race]]; // OK?
        player.char.head = definition.head;
    }

    function mockFlags(player: Player): void {
        player.flags.death = false;
        player.flags.hidden = false;
        player.flags.hunger = 0;
        player.flags.thirst = 0;
        player.flags.naked = false;
        player.flags.paralized = false;
    }

    function mockStats(player: Player): void {
        // Mock attributes (force dices in 18)
        const attributes: Attributes = new Attributes();
        const raceModifier: RaceModifier = Balance.getRaceModifier(player.race);
        attributes.strength = 18 + raceModifier.strength;
        attributes.agility = 18 + raceModifier.agility;
        attributes.intelligence = 18 + raceModifier.intelligence;
        attributes.charisma = 18 + raceModifier.charisma;
        attributes.constitution = 18 + raceModifier.constitution;
        player.stats.attributes = attributes;
    
        // TODO: Al cambiar la estructura de skills, eluskills y expskills ver de volar
        // el numskills de abajo y cambiar la forma en la que se mockea esto
        const NUMSKILLS = 20;
        for (let i = 1; i <= NUMSKILLS; i++) {
            player.stats.skills[i] = 100;
            player.stats.eluSkills[i] = 0;
            player.stats.expSkills[i] = 0;
        }

        player.stats.skillPts = 0;
        
        const hpRandom = (Math.random() * (player.stats.attributes.constitution / 3)) + 1;
        player.stats.maxHp = 15 + hpRandom;
        player.stats.minHp = 15 + hpRandom;
    
        const staRandom = (Math.random() * (player.stats.attributes.agility / 6)) + 2;
        player.stats.maxSta = 20 * staRandom;
        player.stats.minSta = 20 * staRandom;
    
        player.stats.maxWat = 100;
        player.stats.minWat = 100;

        player.stats.maxHun = 100;
        player.stats.minHun = 100;

        switch (player.class) {

            case (Class.Wizard):
                const mana = player.stats.attributes.intelligence * 3;
                player.stats.maxMan = mana;
                player.stats.minMan = mana;
                break;

            case (Class.Cleric):
            case (Class.Druid):
            case (Class.Bard):
            case (Class.Assassin):
            // case (Class.Bandit): TODO: No se usa?
                player.stats.maxMan = 50;
                player.stats.minMan = 50;

            default:
                player.stats.maxMan = 0;
                player.stats.minMan = 0;
        }
    
        player.stats.maxHit = 2;
        player.stats.minHit = 1;
        player.stats.gold = 0;
        player.stats.exp = 0;
        player.stats.elu = 300;
        player.stats.level = 1;
        player.stats.playerKillCount = 0;
    }
}