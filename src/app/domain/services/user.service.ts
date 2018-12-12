// models
import {User} from '../models/user.model';
// service
import {SecurityService} from './security.service';
import {StorageService} from './storage.service';

export class UserService  {

    constructor(private securityService: SecurityService, private storageService: StorageService) {

    }

    createUser<T extends User>(user: T): Promise<T> {

        return this.securityService.canCreateUser()
            .then((isPermitted: boolean) => {

                if (isPermitted) {

                    return this.storageService.createUser(user);
                } else {

                    throw new Error('Creating of user is not permitted');
                }
            });
    }

    // editUser(user: User): Promise<User> {}
    //
    // searchPerformer(options: {[key: string]: any}): Promise<Array<Performer>> {}
    //
    // addPerformerFeedback(performer: Performer, feedback: Feedback): Promise<Performer> {}
    //
    // editPerformerFeedback(performer: Performer, feedback: Feedback): Promise<Performer> {}
    //
    // deletePerformerFeedback(performer: Performer, feedback: Feedback): Promise<Performer> {}
    //
    // addPerformerPhoto(performer: Performer, photo: Photo): Promise<Performer> {}
    //
    // editPerformerPhoto(performer: Performer, photo: Photo): Promise<Performer> {}
    //
    // deletePerformerPhoto(performer: Performer, photo: Photo): Promise<Performer> {}
    //
    // addPerformerSocial(performer: Performer, social: Social): Promise<Performer> {}
    //
    // editPerformerSocial(performer: Performer, social: Social): Promise<Performer> {}
    //
    // deletePerformerSocial(performer: Performer, social: Social): Promise<Performer> {}
}
