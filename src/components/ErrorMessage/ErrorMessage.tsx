import * as S from "./ErrorMessage.style";

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return <S.Message>{message}</S.Message>;
};

export default ErrorMessage;