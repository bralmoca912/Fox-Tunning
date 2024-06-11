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
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t31.18172-8/14876550_1801871883412018_3222782437471604659_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d4DeYVW76y0Q7kNvgHNKRNA&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAsSIHI-vdg_KehLbPlNiynu3FJBM-8lgz3iSJW05BWLA&oe=668F23D3',
      isFavorite: false
    },
    {
      id: 33,
      title: 'Tuneado interno',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/45147754_2173769002888969_7891941018432438272_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aB4xbwbFJRAQ7kNvgGpfoNm&_nc_ht=scontent.fcue12-1.fna&oh=00_AYC-7xgYFR_VIQnMXbUq6QP1ze4CL4w46WAvA3BovyqjwQ&oe=668F47D3',
      isFavorite: false
    },
    {
      id: 34,
      title: 'Imágenes representativas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/45278449_2173765012889368_383556440847024128_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=323oQvxRG1gQ7kNvgGpPWLG&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDXaGfBj7HUO6oH2i0XpIQ_WVDYQX0s_fc9l0F4NXBIDA&oe=668F432B',
      isFavorite: false
    },
    {
      id: 35,
      title: 'Difunde información',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t31.18172-8/22496038_1962379484027923_2769966206505063678_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qz-aykY4SpYQ7kNvgHMmU6A&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAVjc99ygzWJ2aLFiAYopjFnz0Cn0AhwhVnNTsg2IvH2Q&oe=668F3F01',
      isFavorite: false
    },
    {
      id: 36,
      title: 'Tuneado en motocicleta',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t31.18172-8/1277263_1429657180633492_7029863523151454577_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v5Rrr_oxP08Q7kNvgEZiCIq&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCrVGbNCFHZHpqYaCK__XCk7YLYB1oGsMUgfxvkSClPlw&oe=668F3FFB',
      isFavorite: false
    },
    {
      id: 37,
      title: 'Sellado en Aros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t31.18172-8/10296271_1429656967300180_3390320343617473204_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ThWarCDhpRUQ7kNvgGJ_VCJ&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBfAfW4oIBn28lX4OyikCHp3Fuuuif4trtnOUQZ1hMUcg&oe=668F26E0',
      isFavorite: false
    },
    {
      id: 38,
      title: 'Modificación de lunas/Faros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/193680559_2876659935933202_574587469941784845_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nzbpOoDlrH4Q7kNvgGZnzRg&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAnAMYFIXowqqDyH4MQ9oUpFbwRI3QaXuPRboG7jl0yQw&oe=668F4FB2',
      isFavorite: false
    },
    {
      id: 39,
      title: 'Sellos en transporte público',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/404330894_3532633297002526_7487138465849447005_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VRaW7M0thK0Q7kNvgG1e76J&_nc_ht=scontent.fcue12-1.fna&oh=00_AYATNEbVUOaXVeHi_Rx6tKb3KgUsbx_6bmtmpvjTcVIClw&oe=666D7E00',
      isFavorite: false
    },
    {
      id: 39,
      title: 'Luminaria',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/275493608_3075115039421023_298813495826500766_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ha47aPFWTGUQ7kNvgEuSzem&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAxzNG7gFJn1pSNBdhtqr9WvHY4n-IDMyC1GwYLLieMqA&oe=666D7BC2',
      isFavorite: false
    },
  ];

}
