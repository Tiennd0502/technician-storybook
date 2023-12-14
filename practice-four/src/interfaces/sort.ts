export type SortType = 'asc' | 'desc';

export interface Sort {
  field: string;
  type: SortType;
}
