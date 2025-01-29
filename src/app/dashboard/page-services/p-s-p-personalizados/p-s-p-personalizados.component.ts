import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-p-personalizados',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-p-personalizados.component.html',
  styles: ``,
})
export default class PSPPersonalizadosComponent {
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
      id: 40,
      title: 'Tarjetas de presentación',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-tarjetas.jpg',
      isFavorite: false,
    },
    {
      id: 41,
      title: 'Tazas con imágenes',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-tazas.jpg',
      isFavorite: false,
    },
    {
      id: 42,
      title: 'Estampado de camisetas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-estampado-camisetas.jpg',
      isFavorite: false,
    },
    {
      id: 43,
      title: 'Trofeos para campeonatos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-trofeos.jpg',
      isFavorite: false,
    },
    {
      id: 44,
      title: 'Llaveros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-llaveros.jpg',
      isFavorite: false,
    },
    {
      id: 45,
      title: 'Placas geométricas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-placas.jpg',
      isFavorite: false,
    },
    {
      id: 46,
      title: 'Utencilios de negocios',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-utencilios.jpg',
      isFavorite: false,
    },
    {
      id: 47,
      title: 'Estampado de gorras',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-estampado-gorras.jpg',
      isFavorite: false,
    },
    {
      id: 48,
      title: 'Cascos de motocicletas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-cascos.jpg',
      isFavorite: false,
    },
    {
      id: 49,
      title: 'Mascarillas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg:
        'https://lightpink-pheasant-156918.hostingersite.com/img-content/productos-personalizados/PP-mascarillas.jpg',
      isFavorite: false,
    },
  ];
}
