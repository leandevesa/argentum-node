import { Sender } from "../Sender";
import { Player } from "../../../../player/Player";
import { Maps } from "../../../../maps/Maps";
import { Game } from "../../../../game/Game";

export class ToPcArea extends Sender {
    
    public send(player: Player, data: string) {

        Maps.getClientsIdInMap(player.position.map)
            .forEach((otherClientId) => {
                const otherPlayer: Player | null = Game.getPlayer(otherClientId);
                if (otherPlayer) {
                    
                    // TODO: Logica de mandarle data a los users del area
                }
            });
    }
}