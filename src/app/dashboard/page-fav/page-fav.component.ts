import { Component } from '@angular/core';
import { ItemsSavedService } from '../../services/items-saved.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-page-fav',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './page-fav.component.html',
  styles: ``
})
export default class PageFavComponent {

  selectedItems$ = this.itemsService.selectedItems$;

  constructor(private itemsService: ItemsSavedService) { }

  removeItemFromFavorites(item: any) {
    this.itemsService.removeItem(item);
  }
}
