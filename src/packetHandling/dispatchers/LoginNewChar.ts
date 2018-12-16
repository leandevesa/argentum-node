import { BinaryParser } from '../BinaryParser';
import { IDispatchable } from './IDispatchable';
import { LoginNewChar as LoginNewCharPacket } from './packets/LoginNewChar';

export class LoginNewChar implements IDispatchable {

    public dispatch(payload?: Buffer) {
        const data: LoginNewCharPacket = this.parsePayload(payload);
        console.log(data);
        // TODO: Dispatch with payload
    }

    private parsePayload(payload: Buffer): LoginNewCharPacket {
        const newCharParser: BinaryParser = new BinaryParser()
            .string("username")
            .string("password")
            .int8("verA")
            .int8("verB")
            .int8("verC")
            .int8("race")
            .int8("gender")
            .int8("class")
            .int16("head")
            .string("mail")
            .int8("homeland");
            
        return newCharParser.parse(payload);
    }
}