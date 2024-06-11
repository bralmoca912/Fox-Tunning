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
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/242205275_2950854221847106_6372604248149370982_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cQ8YYZRLoPgQ7kNvgH4WvEr&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAx7fvnPzrMF3-_JAEl-IkvIzAGt6DE0WTR-dmXYhN9Sg&oe=666D92CD',
      isFavorite: false
    },
    {
      id: 27,
      title: 'Instalación de publicidad en interiores',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/294038214_3174159219516604_676870216650933730_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k9bTFwRN1VAQ7kNvgGjA5lg&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBaRAbpGff9MzzvIE_V8y4R-Kd7FVHpqm9gcI8xITR6Dw&oe=666D88C3',
      isFavorite: false
    },
    {
      id: 28,
      title: 'Instalación de sellos vehiculares públicos o privados',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/45163644_2173764946222708_1825349921000128512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CYqDdjhAnVsQ7kNvgHgqhHy&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAvDJfvGK9VBKZGynOzcQ-jvCIVmmDt3j_eGngqqehJWQ&oe=668F56B3',
      isFavorite: false
    },
    {
      id: 29,
      title: 'Instalación de gráficos en ventanas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/364790803_3465221910410332_7227262058120783377_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Z0Lcgr7vrMQ7kNvgGYxzci&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCMeTm77VyFehh_NxGLG_1bb-kJ2zH-QxwbAsSdVx8Kow&oe=666D9FA5',
      isFavorite: false
    },
    {
      id: 30,
      title: 'Instalación de sellos publicitarios en negocios',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402941650_3532627483669774_8837519724407968784_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m-gOJFQUF78Q7kNvgECyGve&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAmY0jLw_wE0xzMAqyjA2WqLXeaZrjVozH9MZsYg3kGSQ&oe=666D90D0',
      isFavorite: false
    },
    {
      id: 31,
      title: 'Instalación de letreros de todo tamaño',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/365821036_3465238140408709_1713428913698215844_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ti1p-ZvtFCQQ7kNvgHPqic0&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAl6F2P-3V9AnWLFx3KtceN3nk-ayHmC--L5U-QFLduNg&oe=666D952A',
      isFavorite: false
    },
    {
      id: 31,
      title: 'Instalación de páneles de separación',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/101549500_2595400040725861_3844696290625585152_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BsZeT-_akNgQ7kNvgHVnzmF&_nc_ht=scontent.fcue12-1.fna&oh=00_AYA8FH-nWt-cj56eJ_z2QKWmVeHrr6ZlkvSEmxfjrjeSzA&oe=668F2F11',
      isFavorite: false
    },
  ];

}
