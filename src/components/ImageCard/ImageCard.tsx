import * as S from "./ImageCard.style";

type Props = {
  alt: string;
  image: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const ImageCard = ({ alt, image, onClick }: Props) => {
  return (
    <li>
      <S.Div>
        <S.Image src={image} alt={alt} onClick={onClick} />
      </S.Div>
    </li>
  );
};

export default ImageCard;