import {Injectable} from '@angular/core';

// rxjs
import {from, Observable} from 'rxjs';

// models
import {User} from '../../../domain/models/user.model';
// modules
import {RegistrationModule} from '../registration.module';

import {UserService} from '../../../domain/services/user.service';

@Injectable({
    providedIn: RegistrationModule
})
export class RegistrationService {

    constructor(private userService: UserService) {
    }

    registerViaEmail<T extends User>(user: T): Observable<T> {

        return from(this.userService.createUser(user)) as Observable<T>;
    }
}
