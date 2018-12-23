import { Balance } from "../../global/balance/Balance";
import { RaceModifier } from "../../global/balance/RaceModifier";
import { InventoryMocker } from "./InventoryMocker";
import { Player } from "../../player/Player";
import { ClassType, Class } from "../../player/char/Class";
import { Heading } from "../../player/char/Heading";
import { Body } from "../../player/char/Body";
import { Attributes } from "../../player/Attributes";
import { LoginNewCharDTO } from "../../protocol/receive/packets/LoginNewCharDTO";
import { Level } from "../../game/Level";
import { Race, RaceType } from "../../player/char/Race";
import { Stats } from "../../player/stats/Stats";
import { Mana } from "../../player/stats/Mana";
import { MaxMin } from "../../player/stats/MaxMin";
import { Stamina } from "../../player/stats/Stamina";
import { Hp } from "../../player/stats/Hp";
import { Hit } from "../../player/stats/Hit";
import { SkillPoints } from "../../player/stats/SkillPoints";
import { Elu } from "../../player/stats/Elu";
import { Spells } from "../../player/stats/Spells";
import { Char } from "../../player/char/Char";
import { Position } from "../../player/Position";
import { Inventory } from "../../player/inventory/Inventory";
import { Exp } from "../../player/stats/Exp";

export class PlayerMocker {

    private inventoryMocker: InventoryMocker = new InventoryMocker();

    public mock(newCharDef: LoginNewCharDTO, clientIndex: number): Player {

        const race: Race = new Race(newCharDef.race); 
        const playerClass: Class = new Class(newCharDef.class);
        const stats: Stats = this.mockStats(race.type, playerClass.type);
        const char: Char = this.mockChar(newCharDef);
        const position: Position = this.mockPosition();
        const inventory: Inventory = this.inventoryMocker
                                            .mockInventory(playerClass.type, race);

        const player: Player = new Player(newCharDef.username, newCharDef.mail,
                                          playerClass, race, newCharDef.gender,
                                          stats, char, position, inventory, clientIndex);

        this.inventoryMocker.equipPlayer(player);

        this.mockFlags(player);
        this.mockLevel(player);

        return player;
    }

    private mockAttributes(raceType: RaceType): Attributes {
        // (force dices in 18)
        const attributes: Attributes = new Attributes();
        const raceModifier: RaceModifier = Balance.getRaceModifier(raceType);
        attributes.strength = 18 + raceModifier.strength;
        attributes.agility = 18 + raceModifier.agility;
        attributes.intelligence = 18 + raceModifier.intelligence;
        attributes.charisma = 18 + raceModifier.charisma;
        attributes.constitution = 18 + raceModifier.constitution;
        return attributes;
    }

    private mockMana(classType: ClassType, attributes: Attributes): Mana {
        let mana = 0;
        switch (classType) {
            case (ClassType.Wizard):
                mana = attributes.intelligence * 3;
                break;
            case (ClassType.Cleric):
            case (ClassType.Druid):
            case (ClassType.Bard):
            case (ClassType.Assassin):
                mana = 50;
                mana = 50;
            default:
                mana = 0;
                mana = 0;
        }
        return new Mana(new MaxMin(mana, mana));
    }

    private mockStamina(attributes: Attributes): Stamina {
        const stamina = 20 * ((Math.random() * (attributes.agility / 6)) + 2);
        return new Stamina(new MaxMin(stamina, stamina));
    }

    private mockHp(attributes: Attributes): Hp {
        const hp = 15 + ((Math.random() * (attributes.constitution / 3)) + 1);
        return new Hp(new MaxMin(hp, hp));
    }

    private mockHit(): Hit {
        return new Hit(new MaxMin(1, 2));
    }

    private mockSkills() {
        const NUMSKILLS = 20;
        const allSkills = {
            skills: new Array(),
            eluSkills: new Array(),
            expSkills: new Array()
        };
        for (let i = 1; i <= NUMSKILLS; i++) {
            allSkills.skills[i] = 100;
            allSkills.eluSkills[i] = 0;
            allSkills.expSkills[i] = 0;
        }
        return allSkills;
    }

    private mockStats(raceType: RaceType, classType: ClassType): Stats {
        const exp = new Exp(47980556);
        const attributes = this.mockAttributes(raceType);
        const mana = this.mockMana(classType, attributes);
        const stamina = this.mockStamina(attributes);
        const hp = this.mockHp(attributes);
        const hit = this.mockHit();
        const hunger = new MaxMin(100, 100);
        const thirst = new MaxMin(100, 100);
        const skillPoints = new SkillPoints(0);
        const gold = 0;
        const elu = new Elu(300);
        const level = 1;
        const playerKillCount = 0;
        const allSkills = this.mockSkills();
        const spells = this.mockSpells(classType);

        return new Stats(exp, mana, stamina, hp, hit, attributes, hunger, thirst,
                         skillPoints, gold, elu, level, playerKillCount, allSkills.skills,
                         allSkills.expSkills, allSkills.eluSkills, spells);
    }

    private mockLevel(player: Player) {
        const level:Level = new Level();
        
        level.verifyLevel(player, false);
    }

    private mockPosition(): Position {
        const MAP = 272;
        const x = (Math.random() * 82) + 72;
        const entrada = Math.random() * 2;
        const position = new Position();

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

        position.map = MAP;
        position.x = x;
        position.y = y;

        return position;
    }

    private mockSpells(playerClass: ClassType): Spells {
        const spells: Spells = new Spells();

        if ((playerClass == ClassType.Warrior) || (playerClass == ClassType.Hunter)) 
            return spells;
        
        spells.add(10); // remover paralisis
        spells.add(24); // inmovilizar

        if ((playerClass == ClassType.Cleric) || (playerClass == ClassType.Wizard) || 
            (playerClass == ClassType.Bard) || (playerClass == ClassType.Druid)) {
            spells.add(25); // apocalipsis
        }

        spells.add(23); // descargar electrica
        spells.add(15); // tormenta
        spells.add(8); // misil magico
        //spells.add(14); // invisibilidad
        spells.add(5); // curar heridas graves
        spells.add(18); // celeridad
        spells.add(20); // fuerza

        return spells;
    }

    private mockChar(definition: LoginNewCharDTO): Char {
        const body = Body[Body[definition.race]]; // TODO: OK?
        return new Char(definition.head, body , Heading.South);
    }

    private mockFlags(player: Player): void {
        player.flags.death = false;
        player.flags.hidden = false;
        player.flags.hunger = 0;
        player.flags.thirst = 0;
        player.flags.naked = false;
        player.flags.paralized = false;
    }
}