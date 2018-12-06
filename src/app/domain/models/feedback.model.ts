import {Customer} from './user.model';

export class Feedback {

    id: number;

    author: Customer;

    date: Date;

    text: string;
}