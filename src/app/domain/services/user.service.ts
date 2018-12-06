import {Performer, User} from '../models/user.model';
import {Feedback} from '../models/feedback.model';
import {Photo} from '../models/photo.model';
import {Social} from '../models/social.model';
import {SecurityService} from './security.service';
import {ApiService} from './api.service';

export class UserService  {

    constructor(private securityService: SecurityService, private apiService: ApiService) {

    }

    createUser(user: User): Promise<User> {

        this.securityService.canCreateUser(user);

        return this.apiService.createUser(user);
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