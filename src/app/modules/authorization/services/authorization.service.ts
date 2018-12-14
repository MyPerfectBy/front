import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// rxjs
import {Observable, of} from 'rxjs';
import {mapTo, tap} from 'rxjs/operators';

// service
import {ApiService} from '../../api/services/api.service';
import {User} from '../../../domain/models/user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    readonly url = 'http://dev-back.makeperfect.by/login';

    readonly authorizeByVkUrl = 'http://dev-back.makeperfect.by/connect/vkontakte?code=';

    private user: User;

    constructor(private httpClient: HttpClient, private apiService: ApiService) { }

    authorizeByForm(login: string, password: string): Observable<boolean> {

        const formData = new FormData();

        formData.append('username', login);

        formData.append('password', password);

        return this.httpClient.post(this.url, formData).pipe(
            mapTo(true)
        );
    }

    authorizeByVk(code: string) {

        return this.httpClient.get(this.authorizeByVkUrl + code, ).pipe(
            mapTo(true)
        );
    }

    getUser(): Observable<User> {

        return this.user
            ? of(this.user)
            : this.apiService.getUser().pipe(
                tap((user: User): void => {

                    this.user = user;
                })
            );
    }
}
