import { RaceModifiers } from "./RaceModifiers";
import { Balance } from "./Balance";
import { HpModifiers } from "./HpModifiers";
import { HPDistribution } from "./HPDistribution";

export module BalanceLoader {

    const ROOT = 'dat/balance';

    export function load() {
        const fs = require('fs');

        Balance.setRaceModifiers(loadRaceModifiers(fs));
        Balance.setHpModifiers(loadHpModifiers(fs));
        Balance.setHpDistribution(loadHpDistribution(fs));
    }

    function loadRaceModifiers(fs): RaceModifiers {
        const data: any = JSON.parse(fs.readFileSync(`${ROOT}/raceModifiers.json`,
                                                     'utf8'));
        return new RaceModifiers(data);
    }

    function loadHpModifiers(fs): HpModifiers {
        const data: any = JSON.parse(fs.readFileSync(`${ROOT}/hpModifiers.json`,
                                                     'utf8'));
        return new HpModifiers(data);
    }

    function loadHpDistribution(fs): HPDistribution {
        const data: any = JSON.parse(fs.readFileSync(`${ROOT}/hpDistribution.json`,
                                                     'utf8'));
        return new HPDistribution(data);
    }
}