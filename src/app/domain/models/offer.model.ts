import {Performer, User} from './user.model';
import {Service} from './service.model';

export class Offer {

    id: number;

    service: Service;

    performer: Performer;
}