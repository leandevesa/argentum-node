import * as Binary from 'binary-parser';

export class Deserializer {

    private readonly ENDIANESS: Binary.Parser.Endianness = "little";
    private readonly STRING_OPTIONS: Binary.Parser.StringOptions = { "zeroTerminated": true }
    private parser: Binary.Parser;

    constructor() {
        this.parser = new Binary.Parser().endianess(this.ENDIANESS);
    }

    public string(fieldId: string): Deserializer {
        this.parser.string(fieldId, this.STRING_OPTIONS);
        return this;
    }

    public byte(fieldId: string): Deserializer {
        this.parser.int8(fieldId);
        return this;
    }

    public integer(fieldId: string): Deserializer {
        this.parser.int16(fieldId);
        return this;
    }

    public deserialize(payload?: Buffer): any {
        if (!payload) return null;
        return this.parser.parse(payload);
    }
}