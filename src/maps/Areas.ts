import { Player } from "../player/Player";
import { Maps } from "./Maps";
import { FixedArray } from "../global/FixedArray";
import { Position } from "../player/Position";

export module Areas {

    const _clientIndexesByMap: FixedArray<Array<number>> = new FixedArray(Maps.MAX_MAPS);

    export function addPlayer(player: Player, position: Position) {
        addClientId(player.clientIndex, position.map);
    }

    function addClientId(clientId: number, mapNumber: number) {
        const mapClients = _clientIndexesByMap.get(mapNumber);
        if (mapClients) {
            if (mapClients.indexOf(clientId) == -1) {
                mapClients.push(clientId);
            }
        }
    }
}