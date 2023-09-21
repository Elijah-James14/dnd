import { useQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../services/apiClient";

export interface Photos {
  id: number;
  photographer: string;
  src: Size;
}

interface Size {
  portrait: string;
}

const apiClient = new APIClient<Photos>("search?query=cars&per_page=12");
const usePhotos = () =>
  useQuery<FetchResponse<Photos>, Error>({
    queryKey: ["photos"],
    queryFn: () => apiClient.getPhotos(),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePhotos;
