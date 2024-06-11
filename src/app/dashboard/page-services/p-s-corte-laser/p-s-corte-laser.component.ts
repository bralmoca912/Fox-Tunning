import { Component } from '@angular/core';
import { Item } from '../../../interfaces/items-saved';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-corte-laser',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-corte-laser.component.html',
  styles: ``
})
export default class PSCorteLaserComponent {

  constructor(private itemsService: ItemsSavedService) {
    this.itemsService.selectedItems$.subscribe(selectedItems => {
      this.items.forEach(item => {
        item.isFavorite = selectedItems.some(selectedItem => selectedItem.id === item.id);
      });
    });
  }

  addItemToFavorites(item: Item) {
    this.itemsService.addItem(item);
  }

  items: Item[] = [
    {
      id: 18,
      title: 'Trofeos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/434119359_3618366751762513_1672663837497326904_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0j1P6kvi34AQ7kNvgEp1lDD&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAdm9LkalFrM3pRaSexvkY3ctEozVioQu71u1ImDAFaSg&oe=666D9C61',
      isFavorite: false
    },
    {
      id: 19,
      title: 'Reconocimientos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/421501550_3578199945779194_8106672240992973515_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8CN0zLrfgsEQ7kNvgHncKPu&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBZBdGPg55CYcCs-wUTTI2tRFoBex7SrbhgG8IY7Ym87A&oe=666DA5C8',
      isFavorite: false
    },
    {
      id: 20,
      title: 'Grabado Laser',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/404338981_3532635313668991_236512690672075625_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WRzNENtGkWwQ7kNvgEPFqIa&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCO5yxchIetSDCFuH6tS-v_L4Bokmk2JtulmZ4H7kTygA&oe=666D7167',
      isFavorite: false
    },
    {
      id: 21,
      title: 'Fraces en Ocaciones especiales',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402913730_3532619773670545_8626897351864350080_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2hRS0qdq2RIQ7kNvgHXQHlZ&_nc_ht=scontent.fcue12-1.fna&oh=00_AYB8YP-6L_Kv514CGSaK0EflQlYDW3JxJaG51Qz3h4trhQ&oe=666DA77B',
      isFavorite: false
    },
    {
      id: 22,
      title: 'Llaveros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402901322_3532619760337213_7629558210054360139_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vxEmas4dfpIQ7kNvgF2RtDe&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCezN6LEYAHz9iePAy8nMOk9eSdjYOtUsbt2ln6b1iF5Q&oe=666DA4A9',
      isFavorite: false
    },
    {
      id: 23,
      title: 'Adornos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/323407208_890781915490785_1385100983664168477_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oc6YGGLb0pYQ7kNvgEZe6yd&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBt9sq7OuJMO77BXXa5_ORsMgArqZeZfxBLfFltcP8ohw&oe=666D947B',
      isFavorite: false
    },
    {
      id: 24,
      title: 'Publicidad',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/304939703_3209239632675229_7917631264508064842_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2SmVUsHVI64Q7kNvgERHlq2&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCtBUJGhd5pi-SN9az4j5VlBDar36WhAG2KUpJ_RAxDxQ&oe=666DA2FA',
      isFavorite: false
    },
    {
      id: 25,
      title: 'Porta Celulares',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/305461348_3212081952390997_6133810912543753783_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z3qOv4QYCOgQ7kNvgEdep69&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBFV4lqYrFOM8wrXy4bqs5E3r-7pTzod2utWrxmNTeHuA&oe=666D775F',
      isFavorite: false
    },
  ];

}
