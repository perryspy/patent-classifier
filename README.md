# Patent Classifier

A USPTO/EPO-style CPC patent classification browser built with Angular 21. Built as a
hands-on reference for modern Angular syntax and patterns, covering the major changes
introduced in Angular 14 through 21.

Includes drill-down navigation through the Cooperative Patent Classification (CPC)
hierarchy from section to class to subclass to group, plus a debounced search panel.

## Getting Started

```bash
npm install
ng serve
```

Opens at `http://localhost:4200`.

## Features

- Eight CPC top-level sections (A through H) with drill-down to classes, subclasses, and groups
- Breadcrumb navigation for moving back up the hierarchy
- Debounced search across all classification levels with section filtering
- Dark and light theme toggle with localStorage persistence
- Realistic mock data based on actual CPC classifications

## Project Structure

```
src/app/
├── core/
│   ├── models/
│   │   ├── classification.model.ts   TypeScript interfaces and types
│   │   └── mock-data.ts              CPC mock data and helper functions
│   └── services/
│       └── classification.ts         Signals-based state service
├── features/
│   ├── browser/                      Drill-down classification tree
│   └── search/                       Reactive forms search panel
└── shared/
    └── components/
        ├── badge/                    Reusable classification level badge
        └── breadcrumb/               Navigation breadcrumb trail
```

## Angular Concepts Demonstrated

### Standalone Components

Every component uses `standalone: true` with direct `imports` arrays. No NgModule anywhere in the project.

### Signals

`signal()`, `computed()`, and `effect()` used in the classification service as a reactive
state store, replacing the BehaviorSubject pattern.

```typescript
readonly selectedSection = signal<ClassificationSection | null>(null);

readonly currentLevel = computed(() => {
  if (this.selectedGroup()) return 'group';
  if (this.selectedSubclass()) return 'subclass';
  if (this.selectedClass()) return 'class';
  if (this.selectedSection()) return 'section';
  return 'root';
});
```

### inject()

All dependency injection uses the `inject()` function rather than constructor parameters.

```typescript
private readonly svc = inject(Classification);
private readonly fb = inject(FormBuilder);
```

### input() and output()

Signal-based component I/O replacing `@Input()` and `@Output()` decorators.

```typescript
readonly items = input.required<BreadcrumbItem[]>();
readonly crumbClicked = output<BreadcrumbItem>();
```

### New Control Flow Syntax

`@if`, `@for`, `@switch` replacing `*ngIf`, `*ngFor`, and `[ngSwitch]`.

```html
@switch (currentLevel()) {
  @case ('root') { ... }
  @case ('section') { ... }
  @case ('class') { ... }
}

@for (section of sections; track section.code) {
  ...
} @empty {
  <p>No sections found.</p>
}
```

### takeUntilDestroyed()

Automatic subscription cleanup without manual `ngOnDestroy` or Subject teardown.
Must be called in the constructor, not `ngOnInit`, to be within the injection context.

```typescript
constructor() {
  this.searchForm.valueChanges.pipe(
    debounceTime(300),
    switchMap(...),
    takeUntilDestroyed(),
  ).subscribe(...);
}
```

### Typed Reactive Forms

`FormBuilder` with fully typed form values.

```typescript
readonly searchForm: FormGroup = this.fb.group({
  term: [''],
  system: ['CPC'],
  sectionFilter: [''],
});
```

### asReadonly()

Exposing service signals publicly without allowing external mutation.

```typescript
// Writable internally in the service
readonly selectedSection = signal<ClassificationSection | null>(null);

// Read-only reference in the component
readonly selectedSection = this.svc.selectedSection.asReadonly();
```

### OnPush Change Detection

Every component uses `ChangeDetectionStrategy.OnPush`.

## Old vs. New Angular Reference

| Before (Angular ≤ 13) | Modern Angular (14–21) |
|---|---|
| `@NgModule({ declarations: [] })` | `standalone: true` + `imports: []` |
| `constructor(private svc: MyService)` | `private svc = inject(MyService)` |
| `BehaviorSubject` for state | `signal<T>()` |
| `*ngIf="condition"` | `@if (condition) { }` |
| `*ngFor="let x of items; trackBy: fn"` | `@for (x of items; track x.id) { }` |
| `[ngSwitch]` / `*ngSwitchCase` | `@switch (val) { @case (x) { } }` |
| `@Input() value = ''` | `value = input<string>('')` |
| `@Output() clicked = new EventEmitter()` | `clicked = output<void>()` |
| Manual `ngOnDestroy` + `takeUntil(destroy$)` | `takeUntilDestroyed()` in constructor |
| `platformBrowserDynamic().bootstrapModule(AppModule)` | `bootstrapApplication(App, appConfig)` |

## Built With

- Angular 21
- TypeScript
- RxJS
