import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';

@Component({
  selector: 'app-p-s-marketing',
  standalone: true,
  imports: [],
  templateUrl: './p-s-marketing.component.html',
  styles: ``
})
export default class PSMarketingComponent {

  items: Item[] = [
    { id: 1, urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402936868_3532636257002230_8023856632418873848_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8_7xk7PZD_8Q7kNvgEFccwS&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBiLom52NW-hNG93jrSv6rBI4n0JEuZ4bKGmdF5uptuNg&oe=666C1BE4', title: 'Publicidad en escritorios', tamMax: '1m x 1m', tamMin: 'infinito' },
    { id: 2, urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/364760188_3465235607075629_8238018555992261234_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vhfrm25WBBMQ7kNvgGPdWSY&_nc_ht=scontent.fcue12-1.fna&oh=00_AYADW3s8azEsVqEGJs8lesojyyw3D1dKdZqLnOQkRg6Y4Q&oe=666C13D6', title: 'Publicida en vidrio', tamMax: '1m x 1m', tamMin: 'infinito' },
    { id: 3, urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/421582026_3578198649112657_6538022679366715022_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=55dAZ2mfXDsQ7kNvgHqzXSz&_nc_ht=scontent.fcue12-1.fna&oh=00_AYC3DTvE47Mcd_q84solyzvOrJzVROzjxx6gbPXuQibdiA&oe=666C38DA', title: 'Publicidad en Logotipo 3D', tamMax: '1m x 1m', tamMin: 'infinito' },
  ];

  constructor(private itemsService: ItemsSavedService) { }

  addItemToFavorites(item: Item) {
    this.itemsService.addItem(item);
  }

}
