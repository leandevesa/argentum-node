export class HPDistribution {
    
    private _e1: number;
    private _e2: number;
    private _e3: number;
    private _e4: number;
    private _e5: number;
    private _s1: number;
    private _s2: number;
    private _s3: number;
    private _s4: number;

    constructor(data: any) {
        this._e1 = data.e1;
        this._e2 = data.e2;
        this._e3 = data.e3;
        this._e4 = data.e4;
        this._e5 = data.e5;
        this._s1 = data.s1;
        this._s2 = data.s2;
        this._s3 = data.s3;
        this._s4 = data.s4;
    }

    public getDeviation(isFullAverage: boolean): number {
        return isFullAverage ?
                this.getFullDeviation() :
                this.getHalfDeviation();
    }

    private getHalfDeviation(): number {
		const random: number = Math.random() * 100;

        // TODO: Load hd1,2,3,4 only once when file is loaded

        const hd1 = this._s1;
        const hd2 = hd1 + this._s2;
        const hd3 = hd2 + this._s3;

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

        const f1 = this._e1;
        const f2 = f1 + this._e2;
        const f3 = f2 + this._e3;
        const f4 = f3 + this._e4;

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