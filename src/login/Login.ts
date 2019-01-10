import { PlayerMocker } from "./dotIo/PlayerMocker";
import { Player } from "../player/Player";
import { LoginNewCharDTO } from "../protocol/receive/packets/LoginNewCharDTO";
import { Game } from "../game/Game";
import { InventoryBufferer } from "../protocol/send/bufferers/InventoryBufferer";
import { SpellsBufferer } from "../protocol/send/bufferers/SpellsBufferer";
import { PlayerBufferer } from "../protocol/send/bufferers/PlayerBufferer";
import { MapBufferer } from "../protocol/send/bufferers/MapBufferer";
import { Position } from "../player/Position";
import { Maps } from "../maps/Maps";
import { Coordinates } from "../maps/Coordinates";
import { Areas } from "../maps/Areas";

export class Login {

    private playerMocker: PlayerMocker = new PlayerMocker();
    private playerBufferer: PlayerBufferer = new PlayerBufferer();
    private inventoryBufferer: InventoryBufferer = new InventoryBufferer();
    private spellsBufferer: SpellsBufferer = new SpellsBufferer();
    private mapBufferer: MapBufferer = new MapBufferer();

    public newUser(clientIndex: number, charDefinition: LoginNewCharDTO) {

        // Check if user exists
        // Save new user

        const player: Player = this.playerMocker.mock(charDefinition, clientIndex);
        Game.setClientPlayer(clientIndex, player);

        this.connect(clientIndex, player);
    }

    private connect(clientIndex: number, player: Player) {
        // Resetear flags
        // Asignar privilegios
        // Chequear si tiene equipado cosas y si no defaultea a vacio
        // When MultiMessage -> Seguro resucitacion

        this.inventoryBufferer.updateAllSlots(player);
        this.spellsBufferer.updateAllSlots(player);

        if (player.flags.paralized) {
            this.playerBufferer.updateParalized(player, true)
        }

        // Map and pos validation
        // Telefrag and legalpos
        // Check if in water and has boat -> equip it

        this.playerBufferer.userIndexInServer(player, clientIndex);
        this.mapBufferer.change(player);
        // TODO: Midi packet (WritePlayMidi)

        // Set ChatColor flag according to privileges

        this.makeUserChar(true, player.position.map, player, player.position, false);
    }

    private makeUserChar(toMap: boolean, sendIndex: number, player: Player,
                         position: Position, butIndex: boolean) {

        // TODO: 'If needed make a new character in list
        // TODO: When CharList

        if (toMap) {
            Maps.getMap(position.map)
                .setPlayer(new Coordinates(position.x, position.y), player);
        }

        if (!toMap) {
            // TODO
            throw new Error("Implement!");
        } else {
            Areas.addPlayer(player, position);
        }
    }
}
