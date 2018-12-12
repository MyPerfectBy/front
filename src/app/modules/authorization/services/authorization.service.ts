import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// rxjs
import {Observable} from 'rxjs';
import {mapTo} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    readonly url = 'http://dev-back.makeperfect.by/login';

    readonly authorizeByVkUrl = 'http://dev-back.makeperfect.by/connect/vkontakte?code=';

    constructor(private httpClient: HttpClient) { }

    authorizeByForm(login: string, password: string): Observable<boolean> {

        const formData = new FormData();

        formData.append('username', login);

        formData.append('password', password);

        return this.httpClient.post(this.url, formData).pipe(
            mapTo(true)
        );
    }

    authorizeByVk(code: string) {

        return this.httpClient.get(this.authorizeByVkUrl + code).pipe(
            mapTo(true)
        );
    }
}
