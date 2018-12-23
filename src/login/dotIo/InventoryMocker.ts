import { Objects } from "../../global/objects/Objects";
import { Player } from "../../player/Player";
import { Inventory } from "../../player/inventory/Inventory";
import { ClassType } from "../../player/char/Class";
import { Equipped } from "../../player/inventory/Equipped";
import { Item } from "../../player/inventory/Item";
import { Race } from "../../player/char/Race";

export class InventoryMocker {

    public mockInventory(classType: ClassType, race: Race): Inventory {

        const inventory: Inventory = new Inventory();

        this.addPotions(inventory);
        this.addWeapons(inventory, classType);
        this.addArmor(inventory, classType , !race.isLittle());
        this.addShield(inventory, classType);
        this.addHelmet(inventory, classType);
        this.addFood(inventory);

        return inventory;
    }

    public equipPlayer(player: Player) {

        const inventory: Inventory = player.inventory;

        if (inventory.equipped.weapon) {
            const weapon = Objects.getWeapon(inventory.equipped.weapon.id, player.class);
            if (weapon) {
                player.char.setWeapon(weapon.getAnim(player.race));
            }
        }

        if (inventory.equipped.armor) {
            const armor = Objects.getArmor(inventory.equipped.armor.id);
            if (armor) {
                player.char.setBody(armor.getAnim());
                player.flags.naked = false;
            }
        }

        if (inventory.equipped.shield) { 
            const shield = Objects.getShield(inventory.equipped.shield.id);
            if (shield) {
                player.char.setShield(shield.getAnim());
            }
        }

        if (inventory.equipped.helmet) {
            const helmet = Objects.getHelmet(inventory.equipped.helmet.id);
            if (helmet) {
                player.char.setHelmet(helmet.getAnim());
            }
        }
    }

    private addFood(inventory: Inventory) {
        /* ' Manzanas*/
        this.addItem(inventory, 1);
        /* ' Agua */
        this.addItem(inventory, 43);
    }

    private addHelmet(inventory: Inventory, classType: ClassType) {
        let helmetId: number | null = null;

        switch (classType) {
            case ClassType.Wizard:
                helmetId = 662; // sombrero de mago
                break;
            case ClassType.Paladin:
            case ClassType.Warrior:
            case ClassType.Cleric:
            case ClassType.Assassin:
            case ClassType.Hunter:
                helmetId = 405; // casco de plata
                break;
            case ClassType.Bard:
                helmetId = 132; // casco de hierro
                break;
            case ClassType.Druid:
                helmetId = 1003; // casco de oso
                break;
        }

        if (helmetId) {
            const slotId = this.addItem(inventory, helmetId);
            const helmet = inventory.getItem(slotId);
            if (helmet) {
                helmet.equipped = true;
                inventory.equipped.helmet = new Equipped(slotId, helmetId);
            }
        }
    }

    private addShield(inventory: Inventory, classType: ClassType) {
        let shieldId: number | null = null;
    
        switch (classType) {
            case ClassType.Paladin:
            case ClassType.Warrior:
                shieldId = 130; // escudo de plata
                break;
            case ClassType.Cleric:
            case ClassType.Bard:
                shieldId = 128; // escudo de hierro
                break;
            case ClassType.Assassin:
            case ClassType.Hunter:
            case ClassType.Bard:
                shieldId = 404; // escudo de tortuga
                break;
        }
    
        if (shieldId) {
            const slotId = this.addItem(inventory, shieldId);
            const shield: Item | null = inventory.getItem(slotId);
            if (shield) {
                shield.equipped = true;
                inventory.equipped.shield = new Equipped(slotId, shieldId);
            }
        }
    }

    private addArmor(inventory: Inventory, classType: ClassType, isTall: boolean) {

        let armorId: number = 0;
    
        switch (classType) {
            case ClassType.Wizard: {
                armorId = isTall ? 614 : 932;
                break;
            }
            case ClassType.Cleric:
            case ClassType.Paladin:
            case ClassType.Warrior:
                armorId = isTall ? 195 : 243; // placas / placas
                break;
            case ClassType.Assassin:
                armorId = isTall ? 356 : 854; // armadura de las sombras
                break;
            case ClassType.Bard:
            case ClassType.Druid:
                armorId = isTall ? 519 : 939; // legendaria / Tunica de gala roja
                break;
            case ClassType.Hunter:
                armorId = isTall ? 360 : 648; // armadura de cazador
                break;
        }
    
        const slotId = this.addItem(inventory, armorId);
    
        /* ' Equipo ropa */
        const armor = inventory.getItem(slotId);
        if (armor) {
            armor.equipped = true;
            inventory.equipped.armor = new Equipped(slotId, armorId);
        }
    }

    private addWeapons(inventory: Inventory, classType: ClassType) {
        
        let weaponId;

        switch (classType) {
            case ClassType.Wizard:
                weaponId = 660; // engarzado
                break;
            case ClassType.Cleric:
            case ClassType.Paladin:
                weaponId = 129; // 2f
                break;
            case ClassType.Warrior:
                weaponId = 403; // esp. de plata
                break;
            case ClassType.Assassin:
                weaponId = 367; // daga +4
                break;
            case ClassType.Bard:
                weaponId = 399; // cimitarra
                break;
            case ClassType.Druid:
                weaponId = 366; // daga +3
                break;
            case ClassType.Hunter:
                weaponId = 665;
                break;
        }

        const weaponSlot = this.addItem(inventory, weaponId);
        
        /* Equipar arma */
        const weapon: Item | null = inventory.getItem(weaponSlot);
        if (weapon) {
            weapon.equipped = true;
            inventory.equipped.weapon = new Equipped(weaponSlot, weaponId);
        }

        switch (classType) {
            case ClassType.Hunter:
                const hArrowsSlot = this.addItem(inventory, 553); // Flechas
                const heavyArrows = inventory.getItem(hArrowsSlot);
                if (heavyArrows) {
                    heavyArrows.equipped = true;
                    inventory.equipped.ammo = new Equipped(hArrowsSlot, 553);
                }
                this.addItem(inventory, 126); // Hacha larga de guerra 
                break;
            case ClassType.Warrior:
                const lArrowsSlot = this.addItem(inventory, 480); // Flechas
                const lightArrows = inventory.getItem(lArrowsSlot);
                if (lightArrows) {
                    lightArrows.equipped = true;
                    inventory.equipped.ammo = new Equipped(lArrowsSlot, 480);
                }
                this.addItem(inventory, 664); // Arco compuesto
                this.addItem(inventory, 365); // Daga+2
                break;
            case ClassType.Bard:
                const laudSlot = this.addItem(inventory, 1049); //laud magico
                const laud = inventory.getItem(laudSlot);
                if (laud) {
                    laud.equipped = true;
                    inventory.equipped.ring = new Equipped(laudSlot, 1049);
                }
                this.addItem(inventory, 366); // daga +3
                break;
            case ClassType.Druid:
                const fluteSlot = this.addItem(inventory, 1050); //flauta elfica
                const elficFlute = inventory.getItem(fluteSlot);
                if (elficFlute) {
                    elficFlute.equipped = true;
                    inventory.equipped.ring = new Equipped(fluteSlot, 1050);
                }
                break;
        }
    }

    private addPotions(inventory: Inventory) {
        this.addItem(inventory, 38); // Rojas
        this.addItem(inventory, 37); // Azules
        this.addItem(inventory, 39); // Verdes
        this.addItem(inventory, 36); // Amarillas
    }

    private addItem(inventory: Inventory, itemId: number): number | null {
        return inventory.addItemAndGetSlot(new Item(itemId, 1));
    }
}