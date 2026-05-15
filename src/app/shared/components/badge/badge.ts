import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export type BadgeVariant = 'section' | 'class' | 'subclass' | 'group' | 'count';

@Component({
  selector: 'app-badge',
  imports: [DecimalPipe],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
})
export class Badge {
  readonly variant = input<BadgeVariant>('count');
  readonly value = input<string | number>('');

  readonly hostClass = computed(() => `badge--${this.variant()}`);
}
