import { Injectable } from '@angular/core';
import { Restaurant, RESTAURANTS_DATA } from '../restaurants.data';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private storageKey(id: string) { return `rm_data_${id}`; }

  getRestaurant(id: string): Restaurant | null {
    const base = RESTAURANTS_DATA.find(r => r.id === id);
    if (!base) return null;
    const raw = localStorage.getItem(this.storageKey(id));
    if (!raw) return JSON.parse(JSON.stringify(base));
    return JSON.parse(raw) as Restaurant;
  }

  saveRestaurant(restaurant: Restaurant): void {
    localStorage.setItem(this.storageKey(restaurant.id), JSON.stringify(restaurant));
  }

  resetRestaurant(id: string): void {
    localStorage.removeItem(this.storageKey(id));
  }

  getAllIds(): { id: string; name: string }[] {
    return RESTAURANTS_DATA.map(r => ({ id: r.id, name: r.name }));
  }
}
