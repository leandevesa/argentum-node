import { UserMocker } from "./dotIo/UserMocker";
import { User } from "../user/User";
import { LoginNewChar } from "../packets/packet/LoginNewChar";

export class Login {

    public newUser(user: User, charDefinition: LoginNewChar) {

        // TODO: Check if user exists

        // TODO: Save new user

        UserMocker.mock(user, charDefinition);
    }
}
