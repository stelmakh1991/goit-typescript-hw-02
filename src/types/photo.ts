export interface Photo {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
    profile_image: {
      medium: string;
      large: string;
      small: string;
    };
  };
}