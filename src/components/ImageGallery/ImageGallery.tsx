import ImageCard from "../ImageCard/ImageCard";
import * as S from "./ImageGallery.style";
import { Photo } from "../../types/photo";

type OpenModalFunction = (photo: Photo) => void;

type Props = {
  photos: Photo[];
  openModal: OpenModalFunction;
};

function ImageGallery({ photos, openModal }: Props) {
  return (
    <S.List>
      {photos?.map((photo) => (
        <ImageCard
          key={photo.id}
          image={photo.urls.small}
          alt={photo.alt_description}
          onClick={() => openModal(photo)}
        />
      ))}
    </S.List>
  );
}

export default ImageGallery;