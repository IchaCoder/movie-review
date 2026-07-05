import useSWR from "swr";

export interface API_RESPONSE<T = unknown> {
  movies?: T;
}
const fetcher = async (url: string, token?: string) => {
  let headers = {};

  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }

  const response = await fetch(url, { headers, cache: "no-store" });

  if (!response.ok) {
    const res = await response.json();
    const error = {
      message: res.message || response.statusText || "An error occurred",
    };
    throw error;
  }

  return response.json();
};

/** @description Fetches data from an endpoint
 * @param endpoint - The endpoint to fetch data from
 * @param token - The token to use for authentication (optional)
 *
 * @example
 * const { data, error, mutate } = useFetchData("user")
 */
export const useFetchData = <ReturnData>(endpoint: string | null, revalidateOnFocus: boolean = false) => {
  const { data, error, mutate, isLoading } = useSWR<ReturnData>(endpoint ? `/api/${endpoint}` : null, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus,
  });
  return { data, error, mutate, isLoading };
};
