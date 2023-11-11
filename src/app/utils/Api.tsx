import useSWR from "swr";
import axios from "axios";
async function fetcher(url: string) {
  const res = await axios(url);
  return res.data;
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
