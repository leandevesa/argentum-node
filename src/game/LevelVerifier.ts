import { Player } from "../player/Player";
import { WavId } from "../protocol/send/enums/WavId";
import { AreaSender } from "../protocol/send/area/AreaSender";
import { Senders } from "../protocol/send/area/Senders";
import { PlayerBufferer } from "../protocol/send/bufferers/PlayerBufferer";
import { PlayWav } from "../protocol/send/packets/PlayWav";

interface SmallStats {
    hp: number;
    stamina: number;
    mana: number;
    hit: number;
}

export class LevelVerifier {

    private readonly MAX_NEWBIE_LEVEL = 12;
    private readonly MAX_LEVEL = 255; // TODO: Max level 255???

    private areaSender: AreaSender = new AreaSender();
    private playerBufferer: PlayerBufferer = new PlayerBufferer();

    public verify(player: Player, notifyUser: boolean) {
        
        const previousSkillPoints: number = player.stats.skillPoints;
        const wasNewbie: boolean = this.isNewbie(player);

        while (player.stats.exp.points >= player.stats.elu.points) {

            if (this.isOnMaxLevel(player)) return;

            const previousStats = this.getStats(player);
            player.levelUp();
            const postStats = this.getStats(player);

            if (notifyUser) this.notifyLevelUp(player, previousStats, postStats);
        }

        this.verifyIfNotNewbieAnymore(wasNewbie, player);
        this.verifyGainedSkillPoints(previousSkillPoints, player);

        this.playerBufferer.updateStats(player);
    }

    private getStats(player: Player): SmallStats {
        const hp = player.stats.hp.max;
        const stamina = player.stats.stamina.max;
        const mana = player.stats.mana.max;
        const hit = player.stats.hit.max;

        return {
            "hp": hp,
            "stamina": stamina,
            "mana": mana,
            "hit": hit
        }
    }

    private verifyGainedSkillPoints(previousSkillPoints: number, player: Player) {
        const gainedPoints: number = player.stats.skillPoints - previousSkillPoints;
        const msg: string = `Has ganado un total de ${gainedPoints} skillpoints.`
        
        this.playerBufferer.levelUp(player, gainedPoints);
        this.playerBufferer.consoleMsg(player, msg);
    }

    private verifyIfNotNewbieAnymore(wasNewbie: boolean, player: Player) {
        if (!this.isNewbie(player) && wasNewbie) {
/*             QuitarNewbieObj(UserIndex);
            if (MapInfo[UserList[UserIndex].Pos.Map].Restringir == eRestrict_restrict_newbie) {
                WarpUserChar(UserIndex, 1, 50, 50, true);
                WriteConsoleMsg(UserIndex, "Debes abandonar el Dungeon Newbie.", FontTypeNames_FONTTYPE_INFO);
            } */
        }
    }

    private notifyLevelUp(player: Player, previousStats: SmallStats,
                          postStats: SmallStats) {

        this.areaSender.send(Senders.toPcArea(), player, 
                             new PlayWav(WavId.levelUp, player.position));

        this.playerBufferer.consoleMsg(player, "¡Has subido de nivel!");

        const hpIncrease = postStats.hp - previousStats.hp;
        if (hpIncrease > 0) {
            const msg = `Has ganado ${hpIncrease} puntos de vida.`;
            this.playerBufferer.consoleMsg(player, msg);
        }

        const staIncrease = postStats.stamina - previousStats.stamina;
        if (staIncrease > 0) {
            const msg = `Has ganado ${staIncrease} puntos de energia.`;
            this.playerBufferer.consoleMsg(player, msg);
        }

        const manaIncrease = postStats.mana - previousStats.mana;
        if (manaIncrease > 0) {
            const msg = `Has ganado ${manaIncrease} puntos de mana.`;
            this.playerBufferer.consoleMsg(player, msg);
        }
        
        const hitIncrease = postStats.hit - previousStats.hit;
        if (hitIncrease > 0) {
            const msg = `Tu golpe min/max aumento en ${hitIncrease} puntos.`;
            this.playerBufferer.consoleMsg(player, msg);
        }
    }

    private isNewbie(player: Player): boolean {
        return player.stats.level <= this.MAX_NEWBIE_LEVEL;
    }

    private isOnMaxLevel(player: Player): boolean {
        if (player.stats.level >= this.MAX_LEVEL) {
            player.stats.exp.reset();
            player.stats.elu.reset();
            return true;
        }
        return false;
    }
}