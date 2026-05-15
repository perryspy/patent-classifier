import {
  Component,
  signal,
  effect,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Browser } from './features/browser/browser';
import { Search } from './features/search/search';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [Browser, Search],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly theme = signal<Theme>(
    (localStorage.getItem('patent-classifier-theme') as Theme) ?? 'dark'
  );

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
      localStorage.setItem('patent-classifier-theme', this.theme());
    });
  }

  toggleTheme(): void {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}
