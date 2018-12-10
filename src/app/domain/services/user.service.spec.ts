// jasmine
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;


// models
import {User} from '../models/user.model';
// service
import {SecurityService} from './security.service';
import {StorageService} from './storage.service';
import {UserService} from './user.service';

describe('UserService', () => {

    let securityServiceSpy: SecurityService;

    let storageServiceSpy: StorageService;

    let userService: UserService;

    beforeEach(function () {

        securityServiceSpy = createSpyObj('SecurityService', ['canCreateUser']);

        storageServiceSpy = createSpyObj('StorageService', ['createUser']);

        userService = new UserService(securityServiceSpy, storageServiceSpy);

    });

    it('should be created', () => {


        expect(userService).toBeTruthy();
    });

    it('should check permission when create user', () => {

        const canCreateUserSpy: Spy = securityServiceSpy.canCreateUser as Spy;

        canCreateUserSpy.and.returnValue(Promise.resolve(true));

        const userStub: User = {} as User;

        userService.createUser(userStub)
            .then();


        expect(canCreateUserSpy.calls.any()).toBeTruthy();
    });

    it('should reject creating of a user if it is not permitted', (done: DoneFn) => {

        const canCreateUserSpy: Spy = securityServiceSpy.canCreateUser as Spy;

        canCreateUserSpy.and.returnValue(Promise.resolve(false));

        const userStub: User = {} as User;

        userService.createUser(userStub)
            .catch((error: Error) => {

                expect(error).toBeTruthy();

                done();
            });
    });

    it('should create and return user from storage if it is permitted', (done: DoneFn) => {

        const canCreateUserSpy: Spy = securityServiceSpy.canCreateUser as Spy;

        canCreateUserSpy.and.returnValue(Promise.resolve(true));


        const storageUserStub: User = {} as User;

        const createUserSpy: Spy = storageServiceSpy.createUser as Spy;

        createUserSpy.and.returnValue(Promise.resolve(storageUserStub));


        const userStub: User = {} as User;

        userService.createUser(userStub).then((user: User) => {

            expect(createUserSpy.calls.any()).toBeTruthy();

            expect(user).toBe(storageUserStub);

            done();
        });
    });

});
