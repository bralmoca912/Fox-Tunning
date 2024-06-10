import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/items-saved';

@Injectable({
  providedIn: 'root'
})
export class ItemsSavedService {

  private selectedItemsSource = new BehaviorSubject<Item[]>([]);
  selectedItems$ = this.selectedItemsSource.asObservable();

  addItem(item: Item) {
    const currentItems = this.selectedItemsSource.value;
    this.selectedItemsSource.next([...currentItems, item]);
  }

  removeItem(item: Item) {
    const currentItems = this.selectedItemsSource.value;
    this.selectedItemsSource.next(currentItems.filter(i => i.id !== item.id));
  }
}
