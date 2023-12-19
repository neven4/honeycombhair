import { apiRequest } from "./apiRequest";

type WithPagination<T> = {
  data: T[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
};

type Hairstyle = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export async function fetchHairstyles({
  search,
  page,
  signal,
}: {
  page: number;
  search?: string;
  signal?: AbortSignal;
}): Promise<WithPagination<Hairstyle>> {
  const query = {
    search: search ? search : undefined,
    page: page.toString(),
  };

  const response = await apiRequest<WithPagination<Hairstyle>>({
    path: "hairstyles",
    method: "GET",
    signal,
    query,
  });

  return response;
}
