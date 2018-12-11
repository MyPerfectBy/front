import {User} from '../models/user.model';

export interface StorageService {

    createUser<T extends User>(user: T): Promise<T>;
}
