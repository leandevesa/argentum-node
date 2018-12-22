import { Client } from "./Client";
import { connection } from "websocket";
import { FixedArray } from "../global/FixedArray";
import { Player } from "../player/Player";

export module Game {
    const MAX_PLAYERS = 100;
    const clients: FixedArray<Client> = new FixedArray(MAX_PLAYERS);

    export function addClientAndGetIndex(socket: connection): number | null {
        const client = new Client(socket);
        const index: number | null = clients.pushAndGetIndex(client);

        return index;
    }

    export function getClient(clientIndex: number): Client | null {
        return clients.get(clientIndex);
    }

    export function getPlayer(clientIndex: number): Player | null {
        const client = clients.get(clientIndex);
        if (client) {
            return client.player;
        }
        return null;
    }

    export function setClientPlayer(clientIndex: number, player: Player): void {
        const client = clients.get(clientIndex);
        if (client) client.player = player
    }

    export function removeClient(clientIndex: number): void {
        clients.remove(clientIndex);
    }
}