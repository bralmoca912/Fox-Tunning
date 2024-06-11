import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/items-saved';

@Injectable({
  providedIn: 'root'
})
export class ItemsSavedService {

  private selectedItemsSource = new BehaviorSubject<Item[]>(this.loadItemsFromLocalStorage());
  selectedItems$ = this.selectedItemsSource.asObservable();

  constructor() { }

  private loadItemsFromLocalStorage(): Item[] {
    const itemsString = localStorage.getItem('selectedItems');
    return itemsString ? JSON.parse(itemsString) : [];
  }

  private saveItemsToLocalStorage(items: Item[]): void {
    localStorage.setItem('selectedItems', JSON.stringify(items));
  }

  addItem(item: Item) {
    const currentItems = this.selectedItemsSource.value;
    if (!currentItems.some(i => i.id === item.id)) {
      const newItems = [...currentItems, item];
      this.selectedItemsSource.next(newItems);
      this.saveItemsToLocalStorage(newItems);
    }
  }

  removeItem(item: Item) {
    const currentItems = this.selectedItemsSource.value;
    const newItems = currentItems.filter(i => i.id !== item.id);
    this.selectedItemsSource.next(newItems);
    this.saveItemsToLocalStorage(newItems);
  }
}
