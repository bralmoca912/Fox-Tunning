import { Component } from '@angular/core';
import { Item } from '../../../interfaces/items-saved';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-letreros',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-letreros.component.html',
  styles: ``
})
export default class PSLetrerosComponent {

  constructor(private itemsService: ItemsSavedService) {
    this.itemsService.selectedItems$.subscribe(selectedItems => {
      this.items.forEach(item => {
        item.isFavorite = selectedItems.some(selectedItem => selectedItem.id === item.id);
      });
    });
  }

  addItemToFavorites(item: Item) {
    item.isFavorite = !item.isFavorite;  // Cambia el estado de favorito
    if (item.isFavorite) {
      this.itemsService.addItem(item);
    } else {
      this.itemsService.removeItem(item);
    }
  }

  items: Item[] = [
    {
      id: 1,
      title: 'Letreros en Lona Cortos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402936868_3532636257002230_8023856632418873848_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8_7xk7PZD_8Q7kNvgEFccwS&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBiLom52NW-hNG93jrSv6rBI4n0JEuZ4bKGmdF5uptuNg&oe=666C1BE4',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Letreros en Lona Largos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/421582026_3578198649112657_6538022679366715022_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=55dAZ2mfXDsQ7kNvgHqzXSz&_nc_ht=scontent.fcue12-1.fna&oh=00_AYC3DTvE47Mcd_q84solyzvOrJzVROzjxx6gbPXuQibdiA&oe=666C38DA',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Letreros de Interiores',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/364760188_3465235607075629_8238018555992261234_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vhfrm25WBBMQ7kNvgGPdWSY&_nc_ht=scontent.fcue12-1.fna&oh=00_AYADW3s8azEsVqEGJs8lesojyyw3D1dKdZqLnOQkRg6Y4Q&oe=666C13D6',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Letreros de Advertencias',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/403703564_3532638197002036_5993356248544759412_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AFeIzd5kYHsQ7kNvgGDasvs&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDu8hJvwcEanfmQJpv6ylQo8-jZrdKRfxUjRzNnCXhD1Q&oe=666C12CE',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Letreros Luminosos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/404299384_3532632297002626_2076417696025168266_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CPRoeAVKX6UQ7kNvgHMLuO3&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBmTAW2ByljeT2UurYcMhonxvZYXhFFg7Eps2Q023fryw&oe=666C284C',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Letreros 3D',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/404312615_3532621357003720_8580229140015793974_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uPGIEz47jicQ7kNvgE4vju2&_nc_ht=scontent.fcue12-1.fna&oh=00_AYA4dxYjk9b9QQ5MGU48dL8wkpNjl4me3zgHdLsclu75fA&oe=666C3F33',
      isFavorite: false
    },
  ];

}
