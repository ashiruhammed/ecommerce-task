import { queryClient } from "@/components/Provider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const fetchProducts = (limit = 0) =>
  fetch("https://dummyjson.com/products?limit=" + limit).then((res) =>
    res.json()
  );

export const fetchProduct = (id: number | string) =>
  fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());

export const useProduct = (id: number | string) => {
  const queryClients = useQueryClient(queryClient);

  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    staleTime: 30 * 1000,
  });
};
