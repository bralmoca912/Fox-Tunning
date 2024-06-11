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

  constructor(private itemsService: ItemsSavedService) { }

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
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/268512896_3016320748633786_8318124691153189835_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_0KX0TrSrdMQ7kNvgE79ozn&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBNxYIOzupEIXr16cSSftfmP_EuaRFNFKjDYt4o3yAt-Q&oe=666D9E0B',
      isFavorite: false
    },
    {
      id: 41,
      title: 'Tazas con imágenes',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/277567589_3091000031165857_2008290207767827761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P4StYw4wqAgQ7kNvgGTBz3P&_nc_ht=scontent.fcue12-1.fna&oh=00_AYC3Mtb7EOzUFx5mo4rcet1zh6GrHZUkgv7rW2-78HsRcQ&oe=666D90BC',
      isFavorite: false
    },
    {
      id: 42,
      title: 'Estampado de camisetas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/364808851_3465220337077156_8705874819474425314_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cBaKnlGK9b8Q7kNvgHDX_C0&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBpeix-9Y5Y14Ps0RHsJ1LT61znKEJSpiBWT_sg2YNT3Q&oe=666DA3F6',
      isFavorite: false
    },
    {
      id: 43,
      title: 'Trofeos para campeonatos',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/402855771_3532625570336632_5689509652740589685_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yC-pqLf-G7EQ7kNvgELnKJ1&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAWa9TTIHYa047RF4pe647Dm2pTWY6TgiQwtzceKJtPfA&oe=666D8A49',
      isFavorite: false
    },
    {
      id: 44,
      title: 'Llaveros',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/323446046_641181681343794_9176433698918433251_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FpRg25j6bBkQ7kNvgGq8eIO&_nc_ht=scontent.fcue12-1.fna&oh=00_AYAP2A1XbRGpc4XjJGbdlvlTXew_wnVws9XWUL4Bpz2slg&oe=666D99F4',
      isFavorite: false
    },
    {
      id: 45,
      title: 'Placas geométricas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t39.30808-6/315950793_3277348622530996_1938690044159702475_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XJGMxWLdFBAQ7kNvgF-nHc-&_nc_ht=scontent.fcue12-1.fna&oh=00_AYANJKnxkTyu8djjFcbIOGEmGCBuo6EdrLZAG7pNi8MphA&oe=666DB4C9',
      isFavorite: false
    },
    {
      id: 46,
      title: 'Utencilios de negocios',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/200247072_2888122344786961_7899819770217897691_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pPJjdaqV6LIQ7kNvgEgj5Mc&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDz9z7iqw-xws-xa4a6ruhy6mJzv4LN93ISXvs6CIt5Tg&oe=668F4C8E',
      isFavorite: false
    },
    {
      id: 47,
      title: 'Estampado de gorras',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/163416926_2829824710616725_4650790552281604265_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HiqtG2XAgZQQ7kNvgGKmT_1&_nc_ht=scontent.fcue12-1.fna&oh=00_AYBElwza3xXj0V7ZWu0jEJ1ETvl2sbq-y91fAI7DSuyaSg&oe=668F550F',
      isFavorite: false
    },
    {
      id: 48,
      title: 'Cascos de motocicletas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t31.18172-8/14890335_1801869666745573_7605645927263538384_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MJXyVAww3D0Q7kNvgHm8Jpt&_nc_ht=scontent.fcue12-1.fna&oh=00_AYDLhDikmyvmZZrFzEWsVdirzNpbq596B_5ebjsIZaXXag&oe=668F4168',
      isFavorite: false
    },
    {
      id: 49,
      title: 'Mascarillas',
      tamMin: '1m x 1m',
      tamMax: 'infinito',
      urlImg: 'https://scontent.fcue12-1.fna.fbcdn.net/v/t1.6435-9/104434303_2606086646323867_724261963118972878_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j66LAOdVkpQQ7kNvgGZtWpp&_nc_ht=scontent.fcue12-1.fna&oh=00_AYCeI1kK8r9PASvLEN0phgSl3b9LV3CZyDFa_fAMM3HS1g&oe=668F44BE',
      isFavorite: false
    },
  ];

}
