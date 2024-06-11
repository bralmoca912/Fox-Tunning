import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-p-s-marketing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './p-s-marketing.component.html',
  styles: ``
})
export default class PSMarketingComponent {

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
      id: 7,
      title: 'Gráficos de Ventanas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/426443656_3587284388204083_3490785450031286913_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pMREtZtKeywQ7kNvgFobjDo&_nc_ht=scontent.fcue12-1.fna&oh=00_AYD4ttRYGXPaUjcNRtpk-Hfd0nGwgyVN9kU1ViJ1-MWorA&oe=666DA796',
      isFavorite: false
    },
    {
      id: 8,
      title: 'Rotulación de Vehículos',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/366058294_3465246873741169_2330020274115361946_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Gk0APTA2dtUQ7kNvgF-84mr&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDgNAZeOWUHLpYe80nB1vA_dRZ66mCV9BpFSa2dc2Dx_Q&oe=666D9CAF',
      isFavorite: false
    },
    {
      id: 9,
      title: 'Letreros y Carteles Publicitarios',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/364762344_3465238060408717_4316780968810221946_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t0w8SvZ9RysQ7kNvgEGt96g&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBsdDsPX8pJRDxIVjWh7kVyhCd_IECtAdYjKPV1ZsDVgg&oe=666D7D7B',
      isFavorite: false
    },
    {
      id: 10,
      title: 'Stickers y Etiquetas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/315961368_3277352952530563_2741534599461599559_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wNTvDMoMHzgQ7kNvgHZ2tm6&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBVcoK2FGq4hVgILCODw98nrXFrDRYFlbgLOfA6gzzzzA&oe=666DA203',
      isFavorite: false
    },
    {
      id: 11,
      title: 'Decoración de Interiores',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/404300284_3532623887003467_5811401996137838485_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GMBA6SR0nOEQ7kNvgE1qaOd&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAro0n1wQNniXZFmW55E7eUySwFN2YxowOvXvffURlMdw&oe=666D8297',
      isFavorite: false
    },
    {
      id: 12,
      title: 'Decoración de Fachadas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402857937_3532620583670464_3805392201863760447_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lyhi8C-kOrUQ7kNvgGIVYEW&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDhtz5NidZ2quv3SylN0o1FQwceXpeT40Q3KKyFrkBcFQ&oe=666DA200',
      isFavorite: false
    },
    {
      id: 13,
      title: 'Decoración en oficinas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/294047772_3174159259516600_8724715538177171716_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CKOXuvABPFIQ7kNvgGIR7qx&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBCoPmPcDqjlnM8JyDctvW388F-f-qkzUxPP4cCuDxKww&oe=666D79FC',
      isFavorite: false
    },
    {
      id: 14,
      title: 'Llaveros',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/304939703_3209239632675229_7917631264508064842_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2SmVUsHVI64Q7kNvgERHlq2&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCtBUJGhd5pi-SN9az4j5VlBDar36WhAG2KUpJ_RAxDxQ&oe=666DA2FA',
      isFavorite: false
    },
    {
      id: 14,
      title: 'Impresión de carteles',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/275488949_3075116936087500_434483913301161462_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lk5wHD1NC2YQ7kNvgGby-cw&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDtNo1CuhZIV8e7m3tXGIEm38mNFbo1nZkuo0u6n67DvQ&oe=666D7A92',
      isFavorite: false
    },
    {
      id: 15,
      title: 'Personalización de prendas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/305039188_3209234806009045_8004871976611260241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hbmX9Y-nm4cQ7kNvgEn4dxW&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAE_IeFTbY7vDgk6AreuiXChkI-Wgc7ELq7mYMcYK1Fyw&oe=666D91E7',
      isFavorite: false
    },
    {
      id: 16,
      title: 'Placas',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/275487167_3075117726087421_355157829240438439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BTmsqZdUyWAQ7kNvgHzPnjt&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDFQEhsUMIPtSaJB_jany_S4hsSmjxR6t7HE9arvsTyAA&oe=666D9939',
      isFavorite: false
    },
    {
      id: 17,
      title: 'Información escencial',
      tamMax: '1m x 1m',
      tamMin: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/242751664_2956603807938814_4951994085692718874_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2QIJEeo35qsQ7kNvgE-aJm8&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDxJyNvxLn8NekztbApZdN5WHlW_dNmVoS05cW9aQGYbg&oe=666D7E69',
      isFavorite: false
    },
  ];

}
