import { ConsoleMsg } from "./consoleMsg/ConsoleMsg";
import { FontType } from "./consoleMsg/FontType";
import { PlayWav } from "./PlayWav";
import { Position } from "../../../player/Position";
import { WavId } from "../enums/WavId";
import { LevelUp } from "./LevelUp";
import { Player } from "../../../player/Player";
import { UpdateUserStats } from "./UpdateUserStats";

export module SendPackets {

    export function consoleMsg(text: string, fontType: FontType = FontType.Info) {
        return new ConsoleMsg(text, fontType);
    }

    export function playWav(wavId: WavId, position: Position) {
        return new PlayWav(wavId, position);
    }

    export function levelUp(skillPoints: number) {
        return new LevelUp(skillPoints);
    }

    export function updateUserStats(player: Player) {
        return new UpdateUserStats(player);
    }
}