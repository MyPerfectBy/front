export abstract class SecurityService {

    abstract canCreateUser(): Promise<boolean>;

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
