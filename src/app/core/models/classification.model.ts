export type ClassificationSystem = 'CPC' | 'IPC' | 'USPC';
export type SectionCode = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface ClassificationSection {
  code: SectionCode;
  title: string;
  description: string;
  color: string;
  subclassCount: number;
}

export interface ClassificationClass {
  code: string;
  sectionCode: SectionCode;
  title: string;
  description: string;
  subclassCount: number;
}

export interface ClassificationSubclass {
  code: string;
  classCode: string;
  sectionCode: SectionCode;
  title: string;
  description: string;
  groupCount: number;
  recentFilings?: number;
}

export interface ClassificationGroup {
  code: string;
  subclassCode: string;
  title: string;
  isMainGroup: boolean;
}

export interface SearchQuery {
  term: string;
  system: ClassificationSystem;
  sectionFilter: SectionCode | null;
}

export interface SearchResult {
  code: string;
  title: string;
  description: string;
  level: 'section' | 'class' | 'subclass' | 'group';
  breadcrumb: string[];
}

export type BreadcrumbItem = {
  label: string;
  code: string;
  level: 'section' | 'class' | 'subclass' | 'group';
};
