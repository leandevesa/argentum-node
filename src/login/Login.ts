import { PlayerMocker } from "./dotIo/PlayerMocker";
import { Player } from "../player/Player";
import { LoginNewCharDTO } from "../protocol/receive/packets/LoginNewCharDTO";
import { Game } from "../game/Game";

export class Login {

    private playerMocker: PlayerMocker = new PlayerMocker();

    public newUser(clientIndex: number, charDefinition: LoginNewCharDTO) {

        // Check if user exists
        // Save new user

        const player: Player = this.playerMocker.mock(charDefinition, clientIndex);
        Game.setClientPlayer(clientIndex, player);

        // A partir de aca es el connectuser

        // Resetear flags
        // Chequear si tiene equipado cosas y si no defaultea a vacio

        
    }
}
