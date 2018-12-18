import { Client } from "./Client";
import { connection } from "websocket";
import { Player } from "../../player/Player";
import { FixedArray } from "../FixedArray";

export module Game {
    const MAX_PLAYERS = 100;
    const clients: FixedArray<Client> = new FixedArray(MAX_PLAYERS);

    export function addClientAndGetIndex(socket: connection): number | null {
        const client = new Client(socket);
        const index: number | null = clients.pushAndGetIndex(client);

        return index;
    }

    export function setClientPlayer(clientIndex: number, player: Player): void {
        const client = clients.get(clientIndex);
        if (client) client.player = player
    }

    export function removeClient(clientIndex: number): void {
        clients.remove(clientIndex);
    }
}