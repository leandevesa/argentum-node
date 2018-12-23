import { PlayerMocker } from "./dotIo/PlayerMocker";
import { Player } from "../player/Player";
import { LoginNewCharDTO } from "../protocol/receive/packets/LoginNewCharDTO";
import { Game } from "../game/Game";

export class Login {

    private playerMocker: PlayerMocker = new PlayerMocker();

    public newUser(clientIndex: number, charDefinition: LoginNewCharDTO) {

        // TODO: Check if user exists
        // TODO: Save new user

        const player: Player = this.playerMocker.mock(charDefinition, clientIndex);
        Game.setClientPlayer(clientIndex, player);
    }
}
