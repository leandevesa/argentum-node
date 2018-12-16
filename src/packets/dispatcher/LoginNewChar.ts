import { BinaryParser } from '../BinaryParser';
import { IDispatchable } from './IDispatchable';
import { LoginNewChar as LoginNewCharPacket } from '../packet/LoginNewChar';
import { Login } from '../../login/Login';

export class LoginNewChar implements IDispatchable {

    public dispatch(user: any, payload?: Buffer) {
        const newCharDef: LoginNewCharPacket = this.parsePayload(payload);
        const login: Login = new Login();

        login.newUser(user, newCharDef);
    }

    private parsePayload(payload?: Buffer): LoginNewCharPacket {
        const newCharParser: BinaryParser = new BinaryParser()
            .string("username")
            .string("password")
            .byte("verA")
            .byte("verB")
            .byte("verC")
            .byte("race")
            .byte("gender")
            .byte("class")
            .integer("head")
            .string("mail")
            .byte("homeland");
            
        return newCharParser.parse(payload);
    }
}