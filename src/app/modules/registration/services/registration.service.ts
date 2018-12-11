import {Injectable} from '@angular/core';

// rxjs
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

// models
import {User} from '../../../domain/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor() {
    }

    registerViaEmail<T extends User>(user: T): Observable<T> {

        return of(user).pipe(
            delay(2000)
        );
    }
}
