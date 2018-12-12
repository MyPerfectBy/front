// jasmine
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

// services
import {AuthService} from './auth.service';
import {SecurityService} from './security.service';
import {User} from '../models/user.model';

describe('SecurityService', () => {

    let securityService: SecurityService;

    // spies
    let authServiceSpy: AuthService;

    beforeEach(function () {

        authServiceSpy = createSpyObj('AuthService', ['getUser']);

        securityService = new SecurityService(authServiceSpy);

    });

    it('should be created', () => {

        expect(securityService).toBeTruthy();
    });

    it('should allow to create user for non-authorized user', (done: DoneFn) => {

        const getUserSpy: Spy = authServiceSpy.getUser as Spy;

        getUserSpy.and.returnValue(Promise.resolve(null));


        securityService.canCreateUser().then((isPermitted: boolean): void => {

            expect(isPermitted).toBeTruthy();

            done();
        });
    });
});
