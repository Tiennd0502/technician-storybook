import { ReactElement } from 'react';
import { Sort } from './sort';

export interface TableHeader {
  key: string;
  label: string;
  width: string;
  onSort?: (value: Sort) => void;
  isAction?: boolean;
  customView?: (value: string | number | boolean) => ReactElement;
}

export interface TableData {
  id: string;
  [key: string]: string | number | boolean;
}
