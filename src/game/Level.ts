import { Player } from "../player/Player";
import { DataSender } from "../protocol/send/DataSender";
import { PlayWavBuilder } from "../protocol/send/packets/PlayWav";
import { WavId } from "../protocol/send/enums/WavId";
import { Senders } from "../protocol/send/senders/Senders";

export class Level {

    private readonly NEWBIE_LIMIT_LEVEL = 12;
    private readonly MAX_LEVEL = 255; // TODO: Max level 255???

    private dataSender: DataSender = new DataSender();

    public verifyLevelUp(player: Player, notifyUser: boolean) {

        const wasNewbie: boolean = this.isNewbie(player);

        while (player.stats.exp >= player.stats.elu) {

            if (this.isOnMaxLevel(player)) return;
            // Statistics.userLevelUp(player);
            if (notifyUser) this.notifyLevelUp(player);

        }
    }

    private notifyLevelUp(player: Player) {
        
        this.dataSender.send(Senders.toPcArea(), 
                             player, 
                             PlayWavBuilder.build(WavId.levelUp, player.position));

        //TODO: WriteConsoleMsg(UserIndex, "¡Has subido de nivel!", FontTypeNames_FONTTYPE_INFO);
    }

    private isNewbie(player: Player): boolean {
        return player.stats.level <= this.NEWBIE_LIMIT_LEVEL;
    }

    private isOnMaxLevel(player: Player): boolean {
        if (player.stats.level >= this.MAX_LEVEL) {
            player.stats.exp = 0;
            player.stats.elu = 0;
            return true;
        }
        return false;
    }
}