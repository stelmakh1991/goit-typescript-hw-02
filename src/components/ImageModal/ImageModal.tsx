import React from "react";

import * as S from "./ImageModal.style";
import { Photo } from "../../types/photo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  photo?: Photo | null;
};

const ImageModal: React.FC<Props> = ({ isOpen, onClose, photo }) => {
  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        },
      }}
    >
      {photo && <img src={photo.urls.regular} alt={photo.alt_description} />}
    </S.Modal>
  );
};

export default ImageModal;