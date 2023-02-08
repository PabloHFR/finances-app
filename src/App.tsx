import styled from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";

// Styles imports

const Title = styled.h1`
  color: #696;
  font-size: 3rem;
`;

export function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
      <GlobalStyle />
    </div>
  );
}
