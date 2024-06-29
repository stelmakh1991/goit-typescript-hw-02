import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  min-width: 320px;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
`;