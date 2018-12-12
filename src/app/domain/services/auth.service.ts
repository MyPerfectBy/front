import {User} from '../models/user.model';

export abstract class AuthService {

    abstract getUser(): Promise<User>;
}

