import { Injectable } from '@angular/core';
import { ThemeConfig } from '../restaurants.data';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  apply(theme: ThemeConfig): void {
    const root = document.documentElement;
    root.style.setProperty('--gold',       theme.gold);
    root.style.setProperty('--gold-light', theme.goldLight);
    root.style.setProperty('--dark',       theme.dark);
    root.style.setProperty('--dark-card',  theme.darkCard);
    root.style.setProperty('--surface',    theme.surface);
    root.style.setProperty('--border',     theme.border);
    root.style.setProperty('--text-main',  theme.textMain);
    root.style.setProperty('--text-muted', theme.textMuted);
  }
}
