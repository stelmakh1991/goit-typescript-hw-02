import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { requestPhotos } from "../../services/Api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { GlobalCSS } from "../../styles/Global";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import axios from "axios";
import { Photo } from "../../types/photo";
import * as S from "./App.styled";

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  async function fetchImages(value: string, page: number) {
    try {
      setLoading(true);

      const data = await requestPhotos({
        queryValue: value,
        page,
      });

      setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
    } catch (e) {
      if (!axios.isAxiosError(e) || !e.response) return;
      setIsError(true);
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (value.trim() !== "") {
      fetchImages(value, currentPage);
    }
  }, [value, currentPage]);

  const handleSubmit = (value: string) => {
    if (value === "") {
      iziToast.error({
        title: "Error",
        message: "Enter the value before submitting.",
        position: "topRight",
      });
      return;
    }
    setPhotos([]);
    setValue(value);
  };

  return (
    <S.Container>
      <GlobalCSS />
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {isError && <ErrorMessage message={errorMessage} />}
      <ImageGallery
        photos={photos}
        openModal={(photo) => {
          setSelectedPhoto(photo);
          setOpenModal(true);
        }}
      />
      {photos.length !== 0 && (
        <LoadMoreBtn onClick={() => setCurrentPage(currentPage + 1)} />
      )}
      <ImageModal
        isOpen={openModal}
        photo={selectedPhoto}
        onClose={() => setOpenModal(false)}
      />
    </S.Container>
  );
};

export default App;