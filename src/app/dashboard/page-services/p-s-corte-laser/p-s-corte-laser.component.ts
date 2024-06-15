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
    item.isFavorite = !item.isFavorite;  // Cambia el estado de favorito
    if (item.isFavorite) {
      this.itemsService.addItem(item);
    } else {
      this.itemsService.removeItem(item);
    }
  }

  items: Item[] = [
    {
      id: 18,
      title: 'Trofeos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/HzSwRvd/Corte-laser-Trofeos.jpg',
      isFavorite: false
    },
    {
      id: 19,
      title: 'Reconocimientos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/dp51ZP3/Corte-laser-Reconocimientos.jpg',
      isFavorite: false
    },
    {
      id: 20,
      title: 'Grabado Laser',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/th3C8dB/Corte-laser-grabado-laser.jpg',
      isFavorite: false
    },
    {
      id: 21,
      title: 'Fraces en Ocaciones especiales',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/DwbSSRN/Corte-laser-fraces.jpg',
      isFavorite: false
    },
    {
      id: 22,
      title: 'Llaveros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/Cn0k7F6/Corte-laser-llaveros.jpg',
      isFavorite: false
    },
    {
      id: 23,
      title: 'Adornos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/XL0mztj/Corte-laser-Adornos.jpg',
      isFavorite: false
    },
    {
      id: 24,
      title: 'Publicidad',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/tx2tYP6/Marketing-Llaveros.jpg',
      isFavorite: false
    },
    {
      id: 25,
      title: 'Porta Celulares',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/g7CZprC/Corte-laser-porta-celulares.jpg',
      isFavorite: false
    },
  ];

}
