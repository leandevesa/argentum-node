export class OutgoingBuffer {

    private _buffer: Array<number> = new Array();

    public write(data: Uint8Array) {
        data.forEach((v) => this._buffer.push(v));
        //console.log(data);
    }

    public get(): Buffer {
        return new Buffer(this._buffer);
    }
}