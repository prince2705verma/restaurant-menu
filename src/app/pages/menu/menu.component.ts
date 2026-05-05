import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../restaurants.data';
import { MenuSection } from '../../menu.data';
import { RestaurantService } from '../../services/restaurant.service';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  restaurant: Restaurant | null = null;
  activeSection = '';
  searchQuery = '';
  filterVeg: 'all' | 'veg' | 'nonveg' = 'all';
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private themeService: ThemeService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('restaurantId') ?? 'royal-kitchen';
      const data = this.restaurantService.getRestaurant(id);
      if (!data) { this.notFound = true; return; }
      this.restaurant = data;
      this.activeSection = data.sections[0]?.name ?? '';
      this.themeService.apply(data.theme);
    });
  }

  get filteredSections(): MenuSection[] {
    if (!this.restaurant) return [];
    const q = this.searchQuery.trim().toLowerCase();
    return this.restaurant.sections
      .map(s => ({
        ...s,
        items: s.items.filter(item => {
          const matchSearch = !q || item.name.toLowerCase().includes(q);
          const matchFilter =
            this.filterVeg === 'all' ||
            (this.filterVeg === 'veg' && item.isVeg) ||
            (this.filterVeg === 'nonveg' && !item.isVeg);
          return matchSearch && matchFilter;
        }),
      }))
      .filter(s => s.items.length > 0);
  }

  get isSearching(): boolean {
    return this.searchQuery.trim().length > 0 || this.filterVeg !== 'all';
  }

  scrollToSection(name: string): void {
    this.activeSection = name;
    if (this.isSearching) return;
    document.getElementById('section-' + name)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setFilter(v: 'all' | 'veg' | 'nonveg'): void { this.filterVeg = v; }
  clearSearch(): void { this.searchQuery = ''; }

  isImageUrl(val: string): boolean {
    return /^https?:\/\//i.test(val);
  }

  goToAdmin(): void {
    if (this.auth.isLoggedIn && this.auth.restaurantId === this.restaurant?.id) {
      this.router.navigate(['/admin/dashboard'], { queryParams: { restaurantId: this.restaurant?.id } });
    } else {
      this.router.navigate(['/admin/login'], { queryParams: { restaurantId: this.restaurant?.id } });
    }
  }
}
