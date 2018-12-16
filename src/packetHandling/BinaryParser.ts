import * as Binary from 'binary-parser';

export class BinaryParser {

    private readonly ENDIANESS: Binary.Parser.Endianness = "little";
    private readonly STRING_OPTIONS: Binary.Parser.StringOptions = { "zeroTerminated": true }
    private parser: Binary.Parser;

    constructor() {
        this.parser = new Binary.Parser().endianess(this.ENDIANESS);
    }

    public string(fieldId: string): BinaryParser {
        this.parser.string(fieldId, this.STRING_OPTIONS);
        return this;
    }

    public int8(fieldId: string): BinaryParser {
        this.parser.int8(fieldId);
        return this;
    }

    public int16(fieldId: string): BinaryParser {
        this.parser.int16(fieldId);
        return this;
    }

    public parse(payload: Buffer): any {
        return this.parser.parse(payload);
    }
}
