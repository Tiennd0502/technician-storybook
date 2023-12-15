import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Product, ProductParam } from '@/interfaces';
import { API_ROUTES } from '@/constants';
import { APIs } from '@/services';

export const useFetchProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => APIs.get<Product[]>(process.env.MOCKAPI_BASE_URL + API_ROUTES.PRODUCT),
  });

export const useProduct = () => {
  const queryClient = useQueryClient();

  const createProduct = useMutation({
    mutationFn: (payload: ProductParam) =>
      APIs.post(process.env.MOCKAPI_BASE_URL + API_ROUTES.PRODUCT, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const editProduct = useMutation({
    mutationFn: (payload: ProductParam) =>
      APIs.put(process.env.MOCKAPI_BASE_URL + API_ROUTES.PRODUCT + payload.id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id: string) => APIs.delete(process.env.MOCKAPI_BASE_URL + API_ROUTES.PRODUCT + id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return { createProduct, editProduct, deleteProduct };
};
