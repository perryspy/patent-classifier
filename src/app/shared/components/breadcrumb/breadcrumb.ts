import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbItem } from '../../../core/models/classification.model';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumb {
  readonly items = input.required<BreadcrumbItem[]>();
  readonly crumbClicked = output<BreadcrumbItem>();
  readonly homeClicked = output<void>();
}
