import { IDispatchable } from './IDispatchable';
import { LoginNewCharDTO } from '../packets/LoginNewCharDTO';
import { Login } from '../../../login/Login';
import { Deserializer } from '../../binary/Deserializer';

export class LoginNewChar implements IDispatchable {

    public dispatch(clientIndex: number, payload?: Buffer) {
        const newCharDef: LoginNewCharDTO = this.parsePayload(payload);
        const login: Login = new Login();

        login.newUser(clientIndex, newCharDef);
    }

    private parsePayload(payload?: Buffer): LoginNewCharDTO {
        const deserializer = new Deserializer()
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
            
        return deserializer.deserialize(payload);
    }
}