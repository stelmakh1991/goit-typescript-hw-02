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
      client_id: "e77Hr-FoiXBvzM7RsBeoRwnsRtcgFhtTGod32LzI62k",
      query: queryValue,
      page,
      orientation: "landscape",
    },
  });

  return data;
};