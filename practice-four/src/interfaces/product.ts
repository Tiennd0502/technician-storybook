export enum STATUS {
  Activated,
  Deactivated,
}

export interface Product {
  id?: string;
  name: string;
  brand: string;
  service: string;
  status: number;
}
