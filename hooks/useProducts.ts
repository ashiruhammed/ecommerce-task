import { fetchProduct, fetchProducts } from "@/utils/product-util";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function useProduct(id?: number) {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["product", id],
    queryFn: () => (id ? fetchProduct(id) : fetchProducts()),
    staleTime: 30 * 1000,
    placeholderData: id ? null : keepPreviousData,
  });
  return { isLoading, isError, error, data, isFetching };
}

export { useProduct };
