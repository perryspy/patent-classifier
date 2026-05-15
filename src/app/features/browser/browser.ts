import {
  Component,
  inject,
  signal,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Classification } from '../../core/services/classification';
import {
  ClassificationSection,
  ClassificationClass,
  ClassificationSubclass,
  ClassificationGroup,
  BreadcrumbItem,
} from '../../core/models/classification.model';
import { SECTIONS } from '../../core/models/mock-data';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { Badge } from '../../shared/components/badge/badge';

@Component({
  selector: 'app-browser',
  imports: [DecimalPipe, Breadcrumb, Badge],
  templateUrl: './browser.html',
  styleUrl: './browser.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Browser implements OnInit {
  private readonly svc = inject(Classification);

  readonly selectedSection = this.svc.selectedSection.asReadonly();
  readonly selectedClass = this.svc.selectedClass.asReadonly();
  readonly selectedSubclass = this.svc.selectedSubclass.asReadonly();
  readonly selectedGroup = this.svc.selectedGroup.asReadonly();
  readonly breadcrumbs = this.svc.breadcrumbs;
  readonly currentLevel = this.svc.currentLevel;

  readonly sections = SECTIONS;

  readonly loadingClasses = signal(false);
  readonly loadingSubclasses = signal(false);
  readonly loadingGroups = signal(false);

  readonly classes = signal<ClassificationClass[]>([]);
  readonly subclasses = signal<ClassificationSubclass[]>([]);
  readonly groups = signal<ClassificationGroup[]>([]);

  ngOnInit(): void {}

  selectSection(section: ClassificationSection): void {
    this.svc.selectSection(section);
    this.loadingClasses.set(true);
    this.classes.set([]);
    this.svc.getClassesBySection(section.code).subscribe(data => {
      this.classes.set(data);
      this.loadingClasses.set(false);
    });
  }

  selectClass(cls: ClassificationClass): void {
    this.svc.selectClass(cls);
    this.loadingSubclasses.set(true);
    this.subclasses.set([]);
    this.svc.getSubclassesByClass(cls.code).subscribe(data => {
      this.subclasses.set(data);
      this.loadingSubclasses.set(false);
    });
  }

  selectSubclass(subclass: ClassificationSubclass): void {
    this.svc.selectSubclass(subclass);
    this.loadingGroups.set(true);
    this.groups.set([]);
    this.svc.getGroupsBySubclass(subclass.code).subscribe(data => {
      this.groups.set(data);
      this.loadingGroups.set(false);
    });
  }

  selectGroup(group: ClassificationGroup): void {
    this.svc.selectGroup(group);
  }

  onBreadcrumbClick(item: BreadcrumbItem): void {
    this.svc.navigateToBreadcrumb(item);
  }

  onHomeClick(): void {
    this.svc.clearSelection();
  }
}
