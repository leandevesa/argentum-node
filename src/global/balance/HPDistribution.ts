export class HPDistribution {
    private _halfDistribution1: number;
    private _halfDistribution2: number;
    private _halfDistribution3: number;
    private _halfDistribution4: number;
    private _fullDistribution1: number;
    private _fullDistribution2: number;
    private _fullDistribution3: number;
    private _fullDistribution4: number;
    private _fullDistribution5: number;

    public getDeviation(isFullAverage: boolean): number {
        return isFullAverage ?
                this.getFullDeviation() :
                this.getHalfDeviation();
    }

    private getHalfDeviation(): number {
		const random: number = Math.random() * 100;

        // TODO: Load hd1,2,3,4 only once when file is loaded

        const hd1 = this._halfDistribution1;
        const hd2 = hd1 + this._halfDistribution2;
        const hd3 = hd2 + this._halfDistribution3;

        if (random <= hd1) {
            return 1.5;
        } else if (random <= hd2) {
            return 0.5;
        } else if (random <= hd3) {
            return -0.5;
        } else {
            return -1.5;
        }
    }

    private getFullDeviation(): number {
		const random: number = Math.random() * 100;

        // TODO: Load f1,2,3,4 only once when file is loaded

        const f1 = this._fullDistribution1;
        const f2 = f1 + this._fullDistribution2;
        const f3 = f2 + this._fullDistribution3;
        const f4 = f3 + this._fullDistribution4;

        if (random <= f1) {
            return 2;
        } else if (random <= f2) {
            return 1;
        } else if (random <= f3) {
            return 0;
        } else if (random <= f4) {
            return -1;
        } else {
            return -2;
        }
    }
}