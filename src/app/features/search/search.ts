import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Classification } from '../../core/services/classification';
import { SearchResult, ClassificationSystem } from '../../core/models/classification.model';
import { SECTIONS } from '../../core/models/mock-data';
import { Badge } from '../../shared/components/badge/badge';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, Badge],
  templateUrl: './search.html',
  styleUrl: './search.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Search {
  private readonly svc = inject(Classification);
  private readonly fb = inject(FormBuilder);

  readonly searchForm: FormGroup = this.fb.group({
    term: [''],
    system: ['CPC'],
    sectionFilter: [''],
  });

  readonly sections = SECTIONS;
  readonly isSearching = signal(false);
  readonly hasSearched = signal(false);
  readonly searchResults = signal<SearchResult[]>([]);
  readonly lastSearchTerm = signal('');

  constructor() {
    this.searchForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      switchMap(values => {
        const term = (values.term ?? '').trim();
        if (!term) {
          this.hasSearched.set(false);
          this.searchResults.set([]);
          this.isSearching.set(false);
          return [];
        }
        this.isSearching.set(true);
        this.lastSearchTerm.set(term);
        return this.svc.search({
          term,
          system: values.system as ClassificationSystem,
          sectionFilter: values.sectionFilter || null,
        });
      }),
      takeUntilDestroyed(),
    ).subscribe(results => {
      this.searchResults.set(results);
      this.hasSearched.set(true);
      this.isSearching.set(false);
    });
  }

  clearSearch(): void {
    this.searchForm.patchValue({ term: '' });
    this.hasSearched.set(false);
    this.searchResults.set([]);
  }
}
