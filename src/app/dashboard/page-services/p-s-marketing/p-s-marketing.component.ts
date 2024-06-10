import { Component } from '@angular/core';
import { ItemsSavedService } from '../../../services/items-saved.service';
import { Item } from '../../../interfaces/items-saved';

@Component({
  selector: 'app-p-s-marketing',
  standalone: true,
  imports: [],
  templateUrl: './p-s-marketing.component.html',
  styles: ``
})
export default class PSMarketingComponent {

  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  constructor(private itemsService: ItemsSavedService) { }

  addItemToFavorites(item: Item) {
    this.itemsService.addItem(item);
  }

}
