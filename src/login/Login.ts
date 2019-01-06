import { PlayerMocker } from "./dotIo/PlayerMocker";
import { Player } from "../player/Player";
import { LoginNewCharDTO } from "../protocol/receive/packets/LoginNewCharDTO";
import { Game } from "../game/Game";
import { InventoryBufferer } from "../protocol/send/bufferers/InventoryBufferer";
import { SpellsBufferer } from "../protocol/send/bufferers/SpellsBufferer";
import { PlayerBufferer } from "../protocol/send/bufferers/PlayerBufferer";

export class Login {

    private playerMocker: PlayerMocker = new PlayerMocker();
    private playerBufferer: PlayerBufferer = new PlayerBufferer();
    private inventoryBufferer: InventoryBufferer = new InventoryBufferer();
    private spellsBufferer: SpellsBufferer = new SpellsBufferer();

    public newUser(clientIndex: number, charDefinition: LoginNewCharDTO) {

        // Check if user exists
        // Save new user

        const player: Player = this.playerMocker.mock(charDefinition, clientIndex);
        Game.setClientPlayer(clientIndex, player);

        // Connectuser ->

        // Resetear flags
        // Asignar privilegios
        // Chequear si tiene equipado cosas y si no defaultea a vacio
        // When MultiMessage -> Seguro resucitacion

        this.inventoryBufferer.updateAllSlots(player);
        this.spellsBufferer.updateAllSlots(player);

        if (player.flags.paralized) {
            this.playerBufferer.updateParalized(player, true)
        }
    }
}
