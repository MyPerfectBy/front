import {User} from '../models/user.model';

export interface StorageService {

    createUser(user: User): Promise<User>;
}
