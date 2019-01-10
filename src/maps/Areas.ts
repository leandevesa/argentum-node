import { Player } from "../player/Player";
import { Maps } from "./Maps";
import { Position } from "../player/Position";
import { isNullOrUndefined } from "util";

export module Areas {

    const _clientIndexesByMap = new Array<Array<number>>();

    export function addPlayer(player: Player, position: Position) {
        addClientId(player.clientIndex, position.map);
    }

    function addClientId(clientId: number, mapNumber: number) {
        let mapClients = _clientIndexesByMap[mapNumber];
        
        if (isNullOrUndefined(mapClients)) {
            mapClients = new Array<number>();
        }

        if (mapClients.indexOf(clientId) == -1) {
            mapClients.push(clientId);
        }
    }
}