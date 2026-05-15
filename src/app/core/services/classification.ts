import { Injectable, signal, computed, effect } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  ClassificationSection,
  ClassificationClass,
  ClassificationSubclass,
  ClassificationGroup,
  SearchQuery,
  SearchResult,
  BreadcrumbItem,
  SectionCode,
} from '../models/classification.model';
import {
  SECTIONS,
  CLASSES,
  SUBCLASSES,
  getClassesBySection,
  getSubclassesByClass,
  getGroupsBySubclass,
} from '../models/mock-data';

@Injectable({
  providedIn: 'root',
})
export class Classification {

  // ── State signals ──────────────────────────────────────────────────────────
  readonly selectedSection = signal<ClassificationSection | null>(null);
  readonly selectedClass = signal<ClassificationClass | null>(null);
  readonly selectedSubclass = signal<ClassificationSubclass | null>(null);
  readonly selectedGroup = signal<ClassificationGroup | null>(null);

  // ── Derived signals ────────────────────────────────────────────────────────
  readonly currentLevel = computed(() => {
    if (this.selectedGroup()) return 'group' as const;
    if (this.selectedSubclass()) return 'subclass' as const;
    if (this.selectedClass()) return 'class' as const;
    if (this.selectedSection()) return 'section' as const;
    return 'root' as const;
  });

  readonly breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const trail: BreadcrumbItem[] = [];
    const section = this.selectedSection();
    const cls = this.selectedClass();
    const subclass = this.selectedSubclass();
    const group = this.selectedGroup();

    if (section) trail.push({ label: `${section.code} – ${section.title}`, code: section.code, level: 'section' });
    if (cls) trail.push({ label: `${cls.code} – ${cls.title}`, code: cls.code, level: 'class' });
    if (subclass) trail.push({ label: `${subclass.code} – ${subclass.title}`, code: subclass.code, level: 'subclass' });
    if (group) trail.push({ label: group.code, code: group.code, level: 'group' });

    return trail;
  });

  // ── Navigation ─────────────────────────────────────────────────────────────
  selectSection(section: ClassificationSection): void {
    this.selectedSection.set(section);
    this.selectedClass.set(null);
    this.selectedSubclass.set(null);
    this.selectedGroup.set(null);
  }

  selectClass(cls: ClassificationClass): void {
    this.selectedClass.set(cls);
    this.selectedSubclass.set(null);
    this.selectedGroup.set(null);
  }

  selectSubclass(subclass: ClassificationSubclass): void {
    this.selectedSubclass.set(subclass);
    this.selectedGroup.set(null);
  }

  selectGroup(group: ClassificationGroup): void {
    this.selectedGroup.set(group);
  }

  navigateToBreadcrumb(item: BreadcrumbItem): void {
    switch (item.level) {
      case 'section':
        this.selectedClass.set(null);
        this.selectedSubclass.set(null);
        this.selectedGroup.set(null);
        break;
      case 'class':
        this.selectedSubclass.set(null);
        this.selectedGroup.set(null);
        break;
      case 'subclass':
        this.selectedGroup.set(null);
        break;
    }
  }

  clearSelection(): void {
    this.selectedSection.set(null);
    this.selectedClass.set(null);
    this.selectedSubclass.set(null);
    this.selectedGroup.set(null);
  }

  // ── Data methods ───────────────────────────────────────────────────────────
  getSections(): Observable<ClassificationSection[]> {
    return of(SECTIONS).pipe(delay(150));
  }

  getClassesBySection(sectionCode: SectionCode): Observable<ClassificationClass[]> {
    return of(getClassesBySection(sectionCode)).pipe(delay(100));
  }

  getSubclassesByClass(classCode: string): Observable<ClassificationSubclass[]> {
    return of(getSubclassesByClass(classCode)).pipe(delay(100));
  }

  getGroupsBySubclass(subclassCode: string): Observable<ClassificationGroup[]> {
    return of(getGroupsBySubclass(subclassCode)).pipe(delay(80));
  }

  search(query: SearchQuery): Observable<SearchResult[]> {
    const term = query.term.toLowerCase().trim();
    if (!term) return of([]);

    const results: SearchResult[] = [];

    SECTIONS
      .filter(s => s.title.toLowerCase().includes(term) || s.code.toLowerCase().includes(term))
      .forEach(s => results.push({ code: s.code, title: s.title, description: s.description, level: 'section', breadcrumb: [s.code] }));

    CLASSES
      .filter(c => c.title.toLowerCase().includes(term) || c.code.toLowerCase().includes(term))
      .filter(c => !query.sectionFilter || c.sectionCode === query.sectionFilter)
      .forEach(c => results.push({ code: c.code, title: c.title, description: c.description, level: 'class', breadcrumb: [c.sectionCode, c.code] }));

    SUBCLASSES
      .filter(s => s.title.toLowerCase().includes(term) || s.code.toLowerCase().includes(term))
      .filter(s => !query.sectionFilter || s.sectionCode === query.sectionFilter)
      .forEach(s => results.push({ code: s.code, title: s.title, description: s.description, level: 'subclass', breadcrumb: [s.sectionCode, s.classCode, s.code] }));

    return of(results).pipe(delay(200));
  }
}
