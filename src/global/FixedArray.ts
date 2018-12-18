export class FixedArray<T> {

    private _size: number;
    private _array: Array<T | null>;
    private _freeIndexes: Array<number>;

    constructor(size: number) {
        this._size = size;
        this._array = new Array(size);
        this._freeIndexes = this.createFreeIndexes(size);
    }

    private createFreeIndexes(size: number): Array<number> {
        return Array.apply(null, { length: size }).map(Number.call, Number);
    }

    public get(index: number): T | null {
        return this._array[index];
    }

    public pushAndGetIndex(element: T): number | null {
        if (this._freeIndexes.length > 0) {
            const index: number | undefined = this._freeIndexes.pop()
            if (index) {
                this._array[index] = element;
                return index;
            }
        }
        return null;
    }

    public remove(index: number): void {
        this._array[index] = null;
        this._freeIndexes.push(index);
    }
}