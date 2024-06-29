import axios from "axios";
import { Photo } from "../types/photo";

interface UnsplashApiResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

interface RequestPhotosOptions {
  queryValue?: string;
  page?: number;
}

const URL = "https://api.unsplash.com/search/photos/";

export const requestPhotos = async ({
  queryValue = "",
  page = 1,
}: RequestPhotosOptions): Promise<UnsplashApiResponse> => {
  const { data } = await axios.get(URL, {
    params: {
      client_id: "XlhamTcBfw1C3XzSRruT_ys2JUUQtmyYn6f_Sn2Gezc",
      query: queryValue,
      page,
      orientation: "landscape",
    },
  });

  return data;
};