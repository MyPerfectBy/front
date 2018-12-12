import {User} from '../models/user.model';

export interface AuthService {

    getUser(): Promise<User>;
}

