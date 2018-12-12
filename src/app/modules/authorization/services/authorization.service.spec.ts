import {TestBed} from '@angular/core/testing';

import {AuthorizationService} from './authorization.service';
import {HttpClient} from '@angular/common/http';

describe('AuthorizationService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {
                provide: HttpClient,
                useValue: {}
            }
        ]
    }));

    it('should be created', () => {

        const service: AuthorizationService = TestBed.get(AuthorizationService);

        expect(service).toBeTruthy();
    });
});
