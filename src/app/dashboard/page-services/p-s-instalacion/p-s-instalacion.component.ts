import { Component } from '@angular/core';
import { Item } from '../../../interfaces/items-saved';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-instalacion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-instalacion.component.html',
  styles: ``
})
export default class PSInstalacionComponent {

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
      id: 26,
      title: 'Instalación de Cajas de audio y sonido',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/2F3YBLF/Instalacion-Cajas-de-audio.jpg',
      isFavorite: false
    },
    {
      id: 27,
      title: 'Instalación de publicidad en interiores',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/BN8K72V/Todos-Instalaci-n.jpg',
      isFavorite: false
    },
    {
      id: 28,
      title: 'Instalación de sellos vehiculares públicos o privados',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/B4W4QHV/Instalacion-sellos-v.jpg',
      isFavorite: false
    },
    {
      id: 29,
      title: 'Instalación de gráficos en ventanas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/8r5BVps/Inicio-pesta-as.jpg',
      isFavorite: false
    },
    {
      id: 30,
      title: 'Instalación de sellos publicitarios en negocios',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/9tgR4zr/Marketing-stikers-y-etiquetas.jpg',
      isFavorite: false
    },
    {
      id: 31,
      title: 'Instalación de letreros de todo tamaño',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/zSvPTKJ/Instalacion-letreros-todo-tama-o.jpg',
      isFavorite: false
    },
    {
      id: 31,
      title: 'Instalación de páneles de separación',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/cN7fbXJ/Instalacion-paneles.jpg',
      isFavorite: false
    },
  ];

}
