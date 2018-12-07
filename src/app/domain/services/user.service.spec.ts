import {UserService} from './user.service';
import createSpyObj = jasmine.createSpyObj;
import {SecurityService} from './security.service';
import {Performer, User} from '../models/user.model';
import Spy = jasmine.Spy;
import {ApiService} from './api.service';

describe('UserService', () => {

    let userService: UserService;

    let securityServiceSpy: SecurityService;

    let apiService: ApiService;

    beforeEach(function() {

        securityServiceSpy = createSpyObj('SecurityService', ['canCreateUser']);

        apiService = createSpyObj('ApiService', ['CreateUser']);

        userService = new UserService(securityServiceSpy, apiService);

    });

    it('should be created', () => {


        expect(userService).toBeTruthy();
    });

    it('should check permission when create user', () => {

        const user = new Performer();

        userService.createUser(user);

        const canCreateUserSpy: Spy = securityServiceSpy.canCreateUser as Spy;

        expect(canCreateUserSpy.calls.any()).toBeTruthy();
    });



});
