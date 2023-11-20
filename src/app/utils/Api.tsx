import useSWR from "swr";
import axios from "axios";
async function fetcher(url: string) {
  const res = await axios(url);
  return res.data;
}

export function useProductMain() {
  const { data, error } = useSWR(
    "/api/auth/publisher/product?limit=6&name=main coffee",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useCategoryData() {
  const { data, error } = useSWR("/api/auth/admin/category", fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 6000,
  });
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useCoffeData() {
  const { data, error } = useSWR(
    "/api/auth/publisher/product?name=coffee",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useAllProductsData() {
  const { data, error } = useSWR("/api/auth/publisher/product", fetcher, {
    refreshInterval: 6000,
  });
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useSlideData() {
  const { data, error } = useSWR("/api/auth/publisher/slide", fetcher, {
    revalidateOnFocus: false,
  });
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
