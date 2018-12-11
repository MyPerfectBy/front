import {Component, HostBinding, OnInit} from '@angular/core';
import {Performer} from '../../../../domain/models/user.model';
import {Photo} from '../../../../domain/models/photo.model';
import {Service} from '../../../../domain/models/service.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    performer: Performer = new Performer();

    @HostBinding('class.app-performer-profile') private isDefaultClassUsed = true;

    constructor() { }

    ngOnInit() {

        this.performer.id = 1;

        this.performer.username = 'Екатерина Петропавлоская';

        this.performer.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWK6h04ZhG5C_KQ5SPw6YedTbr-tppHBJ2INJSR3wIXbRsXKND6g';

        this.performer.address = 'ул.Сторожовская д.6';

        this.performer.description = 'Я профессионал своего дела, ногти для меня как холст, на них я творю и создаю шедевры';

        this.performer.viewsCount = 27161;

        const photo = new Photo();

        photo.url = 'http://womenshealth.su/wp-content/uploads/2018/02/krasivie_nogti_02.jpg';

        this.performer.portfolio = [photo, photo, photo, photo, photo, photo, photo,
            photo, photo, photo, photo, photo, photo, photo, photo, photo];

        this.performer.services = [{id: 1, title: 'Маникюр классический', price: 25} as Service,
            {id: 1, title: 'Маникюр неебический', price: 108} as Service,
            {id: 1, title: 'Завивка волос', price: 1018} as Service,
            {id: 1, title: 'Праздничный торт', price: 5} as Service];
    }

}
