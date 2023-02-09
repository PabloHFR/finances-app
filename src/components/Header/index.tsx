import { Container, Content, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Finance App</Title>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
