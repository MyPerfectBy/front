// models
import {User} from '../models/user.model';
// services
import {AuthService} from './auth.service';

export class SecurityService {

    constructor(private authService: AuthService) {
    }

    canCreateUser(): Promise<boolean> {

        return this.authService.getUser()
            .then((authUser: User): boolean => {

                return !authUser;
            });
    }

    // canAddPerformerFeedback(user: User): Promise<boolean>;
    //
    // canEditPerformerFeedback(performer: Performer, feedback: Feedback): Promise<boolean>;
    //
    // canDeletePerformerFeedback(performer: Performer, feedback: Feedback): Promise<boolean>;
    //
    // canAddPerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;
    //
    // canEditPerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;
    //
    // canDeletePerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;
    //
    // canAddPerformerSocial(performer: Performer, social: Social): Promise<boolean>;
    //
    // canEditPerformerSocial(performer: Performer, social: Social): Promise<boolean>;
    //
    // canDeletePerformerSocial(performer: Performer, social: Social): Promise<boolean>;
}
