import { Player } from "../player/Player";
import { DataSender } from "../protocol/send/DataSender";
import { PlayWavBuilder } from "../protocol/send/packets/PlayWav";
import { WavId } from "../protocol/send/enums/WavId";
import { Senders } from "../protocol/send/senders/Senders";
import { Balance } from "../global/balance/Balance";
import { Stats } from "../player/stats/Stats";

export class Level {

    private readonly NEWBIE_LIMIT_LEVEL = 12;
    private readonly MAX_LEVEL = 255; // TODO: Max level 255???
    private readonly SKILL_PTS_PER_LEVEL = 5; // TODO: Max level 255???

    private dataSender: DataSender = new DataSender();

    public verifyLevel(player: Player, notifyUser: boolean) {

        const initialLevel: number = player.stats.level;
        const wasNewbie: boolean = this.isNewbie(player);

        while (player.stats.exp >= player.stats.elu) {

            if (this.isOnMaxLevel(player)) return;

            this.updateLevel(player, notifyUser);
            this.updateExp(player);
            this.updateElu(player);
            this.updateHp(player);
        }
    }

    private updateHp(player: Player) {

        const average: number = Balance.getHPModifier(player.class) - 
                                ((21 - player.stats.attributes.constitution) * 0.5);

        const isFullAverage: boolean = (average - Math.floor(average) != 0);
        
        const deviation: number = Balance.getHPDistribution().getDeviation(isFullAverage);
        
        player.stats.maxHp += average + deviation;

        if (player.stats.maxHp > Stats.MAX_HP) player.stats.maxHp = Stats.MAX_HP;
    }

    private updateElu(player: Player) {
		if (player.stats.level < 15) {
			player.stats.elu = player.stats.elu * 1.4;
		} else if (player.stats.level < 21) {
			player.stats.elu = player.stats.elu * 1.35;
		} else if (player.stats.level < 26) {
			player.stats.elu = player.stats.elu * 1.3;
		} else if (player.stats.level < 35) {
			player.stats.elu = player.stats.elu * 1.2;
		} else if (player.stats.level < 40) {
			player.stats.elu = player.stats.elu * 1.3;
		} else {
			player.stats.elu = player.stats.elu * 1.375;
		}
    }

    private updateExp(player: Player) {
        player.stats.exp -= player.stats.elu;
    }

    private updateLevel(player: Player, notifyUser: boolean) {
        if (notifyUser) {
            this.dataSender.send(Senders.toPcArea(),
                                 player, 
                                 PlayWavBuilder.build(WavId.levelUp, player.position));

            // TODO: WriteConsoleMsg(UserIndex, "¡Has subido de nivel!", FontTypeNames_FONTTYPE_INFO);
        }
        // Statistics.userLevelUp(player);
        player.stats.level += 1;
    }

    private getSkillPts(initialLevel: number, newLevel: number): number {
        return ((newLevel - initialLevel) * this.SKILL_PTS_PER_LEVEL);
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