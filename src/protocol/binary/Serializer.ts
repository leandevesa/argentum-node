export class Serializer {
    
    private _byteArray: Array<number> = new Array();

    public string(value: String): Serializer {

        // First 2b -> string size
        this.integer(value.length);
        // then -> string as binary
        const stringBytes = value.split('').map((chr) => chr.charCodeAt(0));
        this._byteArray = this._byteArray.concat(stringBytes);

       return this;
    }

    public boolean(value: boolean): Serializer {
        if (value) {
            this._byteArray.push(1);
        } else {
            this._byteArray.push(0);
        }
        return this;
    }

    public byte(value: number): Serializer {
        this._byteArray.push(value);
        return this;
    }

    public integer(value: number): Serializer {
        this._byteArray.push(value & 0xff);
        this._byteArray.push((value >> 8) & 0xff);
        return this;
    }

    public long(value: number): Serializer {
        this._byteArray.push(value & 0xff);
        this._byteArray.push((value >> 8) & 0xff);
        this._byteArray.push((value >> 16) & 0xff);
        this._byteArray.push((value >> 24) & 0xff);
        return this;
    }

    public single(value: number): Serializer {
        const buffer = new ArrayBuffer(4);
        const floatArray = new Float32Array(buffer);
        floatArray[0] = value;
        const byteArray = new Uint8Array(buffer);
        for (let i = 0; i < byteArray.length; i++) {
            this._byteArray.push(byteArray[i]);
        }
        return this;
    }

    public serialize(): Uint8Array {
        return new Uint8Array(this._byteArray);
    }
}