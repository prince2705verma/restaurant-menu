import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RestaurantService } from '../../services/restaurant.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent implements OnInit {
  restaurantId = 'royal-kitchen';
  restaurantName = '';
  restaurantLogo = '🍽️';
  username = '';
  password = '';
  showPassword = false;
  error = '';
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private restaurantService: RestaurantService,
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.restaurantId = params.get('restaurantId') ?? 'royal-kitchen';
      const r = this.restaurantService.getRestaurant(this.restaurantId);
      if (r) {
        this.restaurantName = r.name;
        this.restaurantLogo = r.logo;
        this.themeService.apply(r.theme);
      }
    });

    if (this.auth.isLoggedIn) {
      this.router.navigate(['/admin/dashboard'], { queryParams: { restaurantId: this.auth.restaurantId } });
    }
  }

  submit(): void {
    this.error = '';
    if (!this.username || !this.password) { this.error = 'Please fill in all fields.'; return; }
    this.loading = true;
    setTimeout(() => {
      const ok = this.auth.login(this.restaurantId, this.username, this.password);
      this.loading = false;
      if (ok) {
        this.router.navigate(['/admin/dashboard'], { queryParams: { restaurantId: this.restaurantId } });
      } else {
        this.error = 'Invalid username or password.';
      }
    }, 400);
  }

  goToMenu(): void {
    this.router.navigate(['/menu'], { queryParams: { restaurantId: this.restaurantId } });
  }
}
