import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-p-personalizados',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-p-personalizados.component.html',
  styles: ``
})
export default class PSPPersonalizadosComponent {

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
      id: 40,
      title: 'Tarjetas de presentación',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/xjYGYvw/PP-tarjetas.jpg',
      isFavorite: false
    },
    {
      id: 41,
      title: 'Tazas con imágenes',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/vX1Xwyy/Todos-Productos.jpg',
      isFavorite: false
    },
    {
      id: 42,
      title: 'Estampado de camisetas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/wwrwKjJ/PP-Estampado.jpg',
      isFavorite: false
    },
    {
      id: 43,
      title: 'Trofeos para campeonatos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/HzSwRvd/Corte-laser-Trofeos.jpg',
      isFavorite: false
    },
    {
      id: 44,
      title: 'Llaveros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/Cn0k7F6/Corte-laser-llaveros.jpg',
      isFavorite: false
    },
    {
      id: 45,
      title: 'Placas geométricas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/jJwPDZg/Marketing-Placas.jpg',
      isFavorite: false
    },
    {
      id: 46,
      title: 'Utencilios de negocios',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/JKCprjg/PP-Utencilios.jpg',
      isFavorite: false
    },
    {
      id: 47,
      title: 'Estampado de gorras',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/LCJBZHj/PP-estampado-gorras.jpg',
      isFavorite: false
    },
    {
      id: 48,
      title: 'Cascos de motocicletas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/3d8vHtB/PP-Cascos.jpg',
      isFavorite: false
    },
    {
      id: 49,
      title: 'Mascarillas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/Q9V9CG5/PP-Mascarillas.jpg',
      isFavorite: false
    },
  ];

}
