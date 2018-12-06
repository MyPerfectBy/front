import {Performer, User} from '../models/user.model';
import {Feedback} from '../models/feedback.model';
import {Photo} from '../models/photo.model';
import {Social} from '../models/social.model';

export interface SecurityService {

    canCreateUser(user: User): Promise<boolean>;

    canAddPerformerFeedback(user: User): Promise<boolean>;

    canEditPerformerFeedback(performer: Performer, feedback: Feedback): Promise<boolean>;

    canDeletePerformerFeedback(performer: Performer, feedback: Feedback): Promise<boolean>;

    canAddPerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;

    canEditPerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;

    canDeletePerformerPhoto(performer: Performer, photo: Photo): Promise<boolean>;

    canAddPerformerSocial(performer: Performer, social: Social): Promise<boolean>;

    canEditPerformerSocial(performer: Performer, social: Social): Promise<boolean>;

    canDeletePerformerSocial(performer: Performer, social: Social): Promise<boolean>;
}