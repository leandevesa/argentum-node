import { Player } from "../player/Player";
import { DataSender } from "../protocol/send/DataSender";
import { PlayWavBuilder } from "../protocol/send/packets/PlayWav";
import { WavId } from "../protocol/send/enums/WavId";
import { Senders } from "../protocol/send/senders/Senders";

export class Level {

    private readonly MAX_NEWBIE_LEVEL = 12;
    private readonly MAX_LEVEL = 255; // TODO: Max level 255???

    private dataSender: DataSender = new DataSender();

    public verifyLevel(player: Player, notifyUser: boolean) {
        
        const previousSkillPoints: number = player.stats.skillPoints;
        const wasNewbie: boolean = this.isNewbie(player);

        while (player.stats.exp.points >= player.stats.elu.points) {

            if (this.isOnMaxLevel(player)) return;

            // Statistics.userLevelUp(player);

            player.levelUp();

            this.notifyLevelUp(player, notifyUser);
        }

        this.verifyIfNotNewbieAnymore(wasNewbie, player);
        this.verifyGainedSkillPoints(previousSkillPoints, player);

        // TODO: When writeconsolemsg
        // WriteUpdateUserStats(UserIndex);
    }

    private verifyGainedSkillPoints(previousSkillPoints: number, player: Player) {
        const gainedPoints: number = player.stats.skillPoints - previousSkillPoints;

        // TODO: When writeconsolemsg

/*         WriteLevelUp(UserIndex, Pts);

		WriteConsoleMsg(UserIndex, "Has ganado un total de " + vb6::CStr(Pts) + " skillpoints.",
				FontTypeNames_FONTTYPE_INFO); */
    }

    private verifyIfNotNewbieAnymore(wasNewbie: boolean, player: Player) {
        if (!this.isNewbie(player) && wasNewbie) {
            // TODO
/*             QuitarNewbieObj(UserIndex);
            if (MapInfo[UserList[UserIndex].Pos.Map].Restringir == eRestrict_restrict_newbie) {
                WarpUserChar(UserIndex, 1, 50, 50, true);
                WriteConsoleMsg(UserIndex, "Debes abandonar el Dungeon Newbie.", FontTypeNames_FONTTYPE_INFO);
            } */
        }
    }

    private notifyLevelUp(player: Player, notifyUser: boolean) {
        if (notifyUser) {

            // TODO: Write console msg!!

            this.dataSender.send(Senders.toPcArea(),
                                 player, 
                                 PlayWavBuilder.build(WavId.levelUp, player.position));

            // TODO: WriteConsoleMsg(UserIndex, "¡Has subido de nivel!", FontTypeNames_FONTTYPE_INFO);

            /* 
            if (AumentoHP > 0) {
                WriteConsoleMsg(UserIndex, "Has ganado " + vb6::CStr(AumentoHP) + " puntos de vida.",
                                FontTypeNames_FONTTYPE_INFO);
            }
            if (AumentoSTA > 0) {
                WriteConsoleMsg(UserIndex, "Has ganado " + vb6::CStr(AumentoSTA) + " puntos de energía.",
                                FontTypeNames_FONTTYPE_INFO);
            }
            if (AumentoMANA > 0) {
                WriteConsoleMsg(UserIndex, "Has ganado " + vb6::CStr(AumentoMANA) + " puntos de maná.",
                                FontTypeNames_FONTTYPE_INFO);
            }
            if (AumentoHIT > 0) {
                WriteConsoleMsg(UserIndex, "Tu golpe máximo aumentó en " + vb6::CStr(AumentoHIT) + " puntos.",
                                FontTypeNames_FONTTYPE_INFO);
                WriteConsoleMsg(UserIndex, "Tu golpe mínimo aumentó en " + vb6::CStr(AumentoHIT) + " puntos.",
                                FontTypeNames_FONTTYPE_INFO);
            }

            LogDesarrollo(
                    UserList[UserIndex].Name + " paso a nivel " + vb6::CStr(UserList[UserIndex].Stats.ELV) +
                    " gano HP: "
                    + vb6::CStr(AumentoHP)); */
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