import { Injectable } from '@angular/core';
import { RESTAURANTS_DATA } from '../restaurants.data';

const STORAGE_KEY = 'rm_auth';

interface AuthState {
  restaurantId: string;
  username: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private state: AuthState | null = null;

  constructor() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) this.state = JSON.parse(raw);
  }

  login(restaurantId: string, username: string, password: string): boolean {
    const restaurant = RESTAURANTS_DATA.find(r => r.id === restaurantId);
    if (!restaurant) return false;
    const { credentials } = restaurant;
    if (credentials.username !== username || credentials.password !== password) return false;
    this.state = { restaurantId, username };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    return true;
  }

  logout(): void {
    this.state = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  get isLoggedIn(): boolean {
    return this.state !== null;
  }

  get restaurantId(): string | null {
    return this.state?.restaurantId ?? null;
  }

  get username(): string | null {
    return this.state?.username ?? null;
  }
}
