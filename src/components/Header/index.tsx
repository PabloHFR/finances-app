import { Container, Content, Title } from "./styles";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Title>Finance App</Title>
        <button onClick={onOpenTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
