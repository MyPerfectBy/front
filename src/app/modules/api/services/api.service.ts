import {Injectable} from '@angular/core';

// rxjs
import {Observable, of} from 'rxjs';

// apollo
import {Apollo} from 'apollo-angular';
import {QueryOptions} from 'apollo-client';

// graphql
import {GetProfile} from '../graphql/queries/get-profile';
// models
import {Performer, User} from '../../../domain/models/user.model';
import {catchError, map, pluck} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private apollo: Apollo) {
    }

    /**
     * Returns logged in user
     */
    getUser(): Observable<User> {

        const options: QueryOptions = {
            query: GetProfile
        };

        return this.apollo.query(options).pipe(
            pluck('data', 'getProfile'),
            map((data: any): Performer => {

                const performer: Performer = new Performer();

                performer.description = data.description;

                performer.id = data.id;

                performer.username = data.user.username;

                return performer;
            }),
            catchError((): Observable<Performer> => {

                return of(null);
            })
        );
    }

}
