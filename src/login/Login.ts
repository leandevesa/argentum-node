import { PlayerMocker } from "./dotIo/PlayerMocker";
import { Player } from "../player/Player";
import { LoginNewCharDTO } from "../protocol/receive/packets/LoginNewCharDTO";
import { Game } from "../game/Game";

export class Login {

    public newUser(clientIndex: number, charDefinition: LoginNewCharDTO) {

        // TODO: Check if user exists
        // TODO: Save new user

        const player: Player = PlayerMocker.mock(charDefinition, clientIndex);
        Game.setClientPlayer(clientIndex, player);
    }
}
