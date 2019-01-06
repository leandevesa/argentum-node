import { Player } from "../../../player/Player";

export abstract class Sender {
    public abstract send(player: Player, data: string);
}