export class Serializer {
    
    private _byteArray: Array<number> = new Array();

    public string(value: String): Serializer {
        this._byteArray
            .concat(value
                    .split('')
                    .map(
                        function (chr) {
                            return chr.charCodeAt(0);
                        })
                    );

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

    public serialize(): Uint8Array {
        return new Uint8Array(this._byteArray);
    }
}