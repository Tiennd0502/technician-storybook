import { Product } from '@/interfaces';
import { APIs } from '@/services';
import { useQuery } from '@tanstack/react-query';

import { API_ROUTES } from '@/constants';

export const useFetchProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => APIs.get<Product[]>(process.env.MOCKAPI_BASE_URL + API_ROUTES.PRODUCT),
  });
