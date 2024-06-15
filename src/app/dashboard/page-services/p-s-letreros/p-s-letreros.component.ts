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
      urlImg: 'https://i.ibb.co/kQ6rkLz/Letreros-Lona-cortos.jpg',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Letreros en Lona Largos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/FY6DXKj/Letreros-La-Lore-3.jpg',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Letreros de Interiores',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/k49fQcL/Letreros-Interiores.jpg',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Letreros de Advertencias',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/X88pTxg/Letreros-Advertencias.jpg',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Letreros Luminosos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/9tymnJp/Letreros-luminosos.jpg',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Letreros 3D',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/HnPSnfY/Letreros-3-D.jpg',
      isFavorite: false
    },
  ];

}
