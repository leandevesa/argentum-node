import { Player } from "../../../player/Player";
import { OutgoingBufferHandler } from "./OutgoingBufferHandler";
import { UpdateUserStats } from "../packets/UpdateUserStats";
import { LevelUp } from "../packets/LevelUp";
import { ConsoleMsg } from "../packets/consoleMsg/ConsoleMsg";
import { FontType } from "../packets/consoleMsg/FontType";
import { ParalizeOk } from "../packets/ParalizeOk";
import { UserIndexInServer } from "../packets/UserIndexInServer";

export class PlayerBufferer {

    private bufferHandler: OutgoingBufferHandler = new OutgoingBufferHandler();

    public updateStats(player: Player): void {
        const packet = new UpdateUserStats(player);
        this.bufferHandler.buffer(player, packet);
    }

    public updateParalized(player: Player, isParalized: boolean): void {
        if (isParalized) {
            const packet = new ParalizeOk();
            this.bufferHandler.buffer(player, packet);
        } else {
            // TODO: Paralize off
        }
    }

    public levelUp(player: Player, gainedSkillPoints: number): void {
        const packet = new LevelUp(gainedSkillPoints);
        this.bufferHandler.buffer(player, packet);
    }

    public userIndexInServer(player: Player, userIndex: number): void {
        const packet = new UserIndexInServer(userIndex);
        this.bufferHandler.buffer(player, packet);
    }

    public consoleMsg(player: Player, msg: string, 
                      fontType: FontType = FontType.Info): void {

        const packet = new ConsoleMsg(msg, fontType);
        this.bufferHandler.buffer(player, packet);
    }
}