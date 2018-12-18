export class Spells {

    private readonly MAX_SPELLS = 35;
    
    private _spells: Array<number> = new Array(this.MAX_SPELLS);;
    private _spellQuantity = 0;
    
    public add(spellId: number) {
        if (this._spellQuantity < this.MAX_SPELLS) {
            this._spells.push(spellId);
            this._spellQuantity++;
        }
    }
}