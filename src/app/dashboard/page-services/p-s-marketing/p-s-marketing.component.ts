import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-marketing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-marketing.component.html',
  styles: ``,
})
export default class PSMarketingComponent {
  constructor(private itemsService: ItemsSavedService) {
    this.itemsService.selectedItems$.subscribe((selectedItems) => {
      this.items.forEach((item) => {
        item.isFavorite = selectedItems.some(
          (selectedItem) => selectedItem.id === item.id
        );
      });
    });
  }

  addItemToFavorites(item: Item) {
    item.isFavorite = !item.isFavorite; // Cambia el estado de favorito
    if (item.isFavorite) {
      this.itemsService.addItem(item);
    } else {
      this.itemsService.removeItem(item);
    }
  }

  items: Item[] = [
    {
      id: 7,
      title: 'Gráficos de Ventanas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-graficos-de-ventana.jpg',
      isFavorite: false,
    },
    {
      id: 8,
      title: 'Rotulación de Vehículos',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-rotulacion.jpg',
      isFavorite: false,
    },
    {
      id: 9,
      title: 'Letreros y Carteles Publicitarios',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-letreros-y-carteles.jpg',
      isFavorite: false,
    },
    {
      id: 10,
      title: 'Stickers y Etiquetas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-stikers-y-etiquetas.jpg',
      isFavorite: false,
    },
    {
      id: 11,
      title: 'Decoración de Interiores',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-Dec-interiores.jpg',
      isFavorite: false,
    },
    {
      id: 12,
      title: 'Decoración de Fachadas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-Fachadas.jpg',
      isFavorite: false,
    },
    {
      id: 13,
      title: 'Decoración en oficinas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-dec-oficinas.jpg',
      isFavorite: false,
    },
    {
      id: 14,
      title: 'Llaveros',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-Llaveros.jpg',
      isFavorite: false,
    },
    {
      id: 14,
      title: 'Impresión de carteles',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-impresion-de-carteles.jpg',
      isFavorite: false,
    },
    {
      id: 15,
      title: 'Personalización de prendas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-personalizacion-de-prendas.jpg',
      isFavorite: false,
    },
    {
      id: 16,
      title: 'Placas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-Placas.jpg',
      isFavorite: false,
    },
    {
      id: 17,
      title: 'Información escencial',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/marketing/Marketing-Info-escencial.jpg',
      isFavorite: false,
    },
  ];
}
