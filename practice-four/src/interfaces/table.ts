import { Sort } from './sort';

export interface TableHeader {
  key: string;
  label: string;
  width: string;
  onSort?: (value: Sort) => void;
  isAction?: boolean;
}

export interface TableData {
  id: string;
  [key: string]: string | number | boolean;
}
