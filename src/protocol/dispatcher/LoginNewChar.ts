import { BinaryParser } from '../BinaryParser';
import { IDispatchable } from './IDispatchable';
import { LoginNewCharDTO } from '../packets/LoginNewCharDTO';
import { Login } from '../../login/Login';

export class LoginNewChar implements IDispatchable {

    public dispatch(clientIndex: number, payload?: Buffer) {
        const newCharDef: LoginNewCharDTO = this.parsePayload(payload);
        const login: Login = new Login();

        login.newUser(clientIndex, newCharDef);
    }

    private parsePayload(payload?: Buffer): LoginNewCharDTO {
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