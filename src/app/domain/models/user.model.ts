import {Feedback} from './feedback.model';
import {Social} from './social.model';
import {Photo} from './photo.model';
import {Service} from './service.model';

export abstract class User {

    id: number;

    username: string;

    email: string;

    password: string;

    abstract role: Role;

    avatar: string;
}

export class Admin extends User {

    role = Role.ADMIN;
}

export class Customer extends User {

    role = Role.CUSTOMER;
}

export class Performer extends User {

    role = Role.PERFORMER;

    address: string;

    description: string;

    viewsCount: number;

    services: Array<Service>;

    feedback: Array<Feedback>;

    socials: Array<Social>;

    portfolio: Array<Photo>;
}

export enum Role {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
    PERFORMER = 'PERFORMER',
}
