import { Component } from '@angular/core';
import { Item } from '../../../interfaces/items-saved';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-d-vehicular',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-d-vehicular.component.html',
  styles: ``
})
export default class PSDVehicularComponent {

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
      id: 32,
      title: 'Tuneado externo',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/r5XhG6T/Dec-Vehicular-Tuneado-externo.jpg',
      isFavorite: false
    },
    {
      id: 33,
      title: 'Tuneado interno',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/dk0DDvw/Dec-Vehicular-Tuneado-interno.jpg',
      isFavorite: false
    },
    {
      id: 34,
      title: 'Imágenes representativas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/B4W4QHV/Instalacion-sellos-v.jpg',
      isFavorite: false
    },
    {
      id: 35,
      title: 'Difunde información',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/fp2FwmJ/Marketing-Info-escencial.jpg',
      isFavorite: false
    },
    {
      id: 36,
      title: 'Tuneado en motocicleta',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/3dfrdfd/Dec-Vehicular-motos.jpg',
      isFavorite: false
    },
    {
      id: 37,
      title: 'Sellado en Aros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/SNV7Q7Q/Dec-Vehicular-Sellado-en-aros.jpg',
      isFavorite: false
    },
    {
      id: 38,
      title: 'Modificación de lunas/Faros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/Vq56KR7/Dec-Vehicular-modificacion-de-lunas.jpg',
      isFavorite: false
    },
    {
      id: 39,
      title: 'Sellos en transporte público',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/q5y2NKQ/Dec-sello-transporte-p-blico.jpg',
      isFavorite: false
    },
    {
      id: 50,
      title: 'Luminaria',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://i.ibb.co/DYFXR6P/Dec-Vehicular-luminaria.jpg',
      isFavorite: false
    },
  ];

}
