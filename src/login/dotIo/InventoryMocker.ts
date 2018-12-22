import { Objects } from "../../global/objects/Objects";
import { Player } from "../../player/Player";
import { Inventory } from "../../player/inventory/Inventory";
import { Class, ClassType } from "../../player/char/Class";
import { Equipped } from "../../player/inventory/Equipped";
import { Item } from "../../player/inventory/Item";

export module InventoryMocker {

    export function mock(player: Player) {

        const inventory: Inventory = new Inventory();

        addPotions(inventory);
        addWeapons(inventory, player.class);
        addArmor(inventory, player.class , !player.race.isLittle());
        addShield(inventory, player.class);
        addHelmet(inventory, player.class);
        addFood(inventory);

        loadPlayer(player, inventory);
    }

    function loadPlayer(player: Player, inventory: Inventory) {
        if (inventory.equipped.weapon) {
            const weapon = Objects.getWeapon(inventory.equipped.weapon.id, player.class);
            if (weapon) {
                player.char.weaponAnim = weapon.getAnim(player.race);
            }
        }

        if (inventory.equipped.armor) {
            const armor = Objects.getArmor(inventory.equipped.armor.id);
            if (armor) {
                player.char.bodyAnim = armor.getAnim();
                player.flags.naked = false;
            }
        }

        if (inventory.equipped.shield) { 
            const shield = Objects.getShield(inventory.equipped.shield.id);
            if (shield) {
                player.char.shieldAnim = shield.getAnim();
            }
        }

        if (inventory.equipped.helmet) {
            const helmet = Objects.getHelmet(inventory.equipped.helmet.id);
            if (helmet) {
                player.char.helmetAnim = helmet.getAnim();
            }
        }
    }

    function addFood(inventory: Inventory) {
        /* ' Manzanas*/
        addItem(inventory, 1);
        /* ' Agua */
        addItem(inventory, 43);
    }

    function addHelmet(inventory: Inventory, playerClass: Class) {
        let helmetId: number | null = null;

        switch (playerClass.type) {
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
            const slotId = addItem(inventory, helmetId);
            const helmet = inventory.getItem(slotId);
            if (helmet) {
                helmet.equipped = true;
                inventory.equipped.helmet = new Equipped(slotId, helmetId);
            }
        }
    }

    function addShield(inventory: Inventory, playerClass: Class) {
        let shieldId: number | null = null;
    
        switch (playerClass.type) {
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
            const slotId = addItem(inventory, shieldId);
            const shield: Item | null = inventory.getItem(slotId);
            if (shield) {
                shield.equipped = true;
                inventory.equipped.shield = new Equipped(slotId, shieldId);
            }
        }
    }

    function addArmor(inventory: Inventory, playerClass: Class, isTall: boolean) {

        let armorId: number = 0;
    
        switch (playerClass.type) {
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
    
        const slotId = addItem(inventory, armorId);
    
        /* ' Equipo ropa */
        const armor = inventory.getItem(slotId);
        if (armor) {
            armor.equipped = true;
            inventory.equipped.armor = new Equipped(slotId, armorId);
        }
    }

    function addWeapons(inventory: Inventory, playerClass: Class) {
        
        let weaponId;

        switch (playerClass.type) {
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

        const weaponSlot = addItem(inventory, weaponId);
        
        /* Equipar arma */
        const weapon: Item | null = inventory.getItem(weaponSlot);
        if (weapon) {
            weapon.equipped = true;
            inventory.equipped.weapon = new Equipped(weaponSlot, weaponId);
        }

        switch (playerClass.type) {
            case ClassType.Hunter:
                const hArrowsSlot = addItem(inventory, 553); // Flechas
                const heavyArrows = inventory.getItem(hArrowsSlot);
                if (heavyArrows) {
                    heavyArrows.equipped = true;
                    inventory.equipped.ammo = new Equipped(hArrowsSlot, 553);
                }
                addItem(inventory, 126); // Hacha larga de guerra 
                break;
            case ClassType.Warrior:
                const lArrowsSlot = addItem(inventory, 480); // Flechas
                const lightArrows = inventory.getItem(lArrowsSlot);
                if (lightArrows) {
                    lightArrows.equipped = true;
                    inventory.equipped.ammo = new Equipped(lArrowsSlot, 480);
                }
                addItem(inventory, 664); // Arco compuesto
                addItem(inventory, 365); // Daga+2
                break;
            case ClassType.Bard:
                const laudSlot = addItem(inventory, 1049); //laud magico
                const laud = inventory.getItem(laudSlot);
                if (laud) {
                    laud.equipped = true;
                    inventory.equipped.ring = new Equipped(laudSlot, 1049);
                }
                addItem(inventory, 366); // daga +3
                break;
            case ClassType.Druid:
                const fluteSlot = addItem(inventory, 1050); //flauta elfica
                const elficFlute = inventory.getItem(fluteSlot);
                if (elficFlute) {
                    elficFlute.equipped = true;
                    inventory.equipped.ring = new Equipped(fluteSlot, 1050);
                }
                break;
        }
    }

    function addPotions(inventory: Inventory) {
        addItem(inventory, 38); // Rojas
        addItem(inventory, 37); // Azules
        addItem(inventory, 39); // Verdes
        addItem(inventory, 36); // Amarillas
    }

    function addItem(inventory: Inventory, itemId: number): number | null {
        return inventory.addItemAndGetSlot(new Item(itemId, 1));
    }
}