import axios from "axios";

export interface FetchResponse<T> {
  total_results: number;
  page: number;
  per_page: number;
  photos: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: "QGoYgzdyxwEqSmPcDndXs9fYHaTIoTgv1m1eiSUOcQpQr2TURMyeaxcL",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getPhotos = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;
