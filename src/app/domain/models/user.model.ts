import {Feedback} from './feedback.model';
import {Social} from './social.model';
import {Photo} from './photo.model';

export abstract class User {

    id: number;

    username: string;

    abstract role: Role;
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

    feedback: Array<Feedback>;

    socials: Array<Social>;

    portfolio: Array<Photo>;
}

export enum Role {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
    PERFORMER = 'PERFORMER',
}