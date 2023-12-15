import { LayoutProps } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Sort } from './sort';

export interface TableHeader {
  key: string;
  label: string;
  width: LayoutProps['w'];
  onSort?: (value: Sort) => void;
  isAction?: boolean;
  isCheckbox?: boolean;
  customView?: (value: string | number | boolean) => ReactElement;
}

export interface TableData {
  id: string;
  [key: string]: string | number | boolean;
}
