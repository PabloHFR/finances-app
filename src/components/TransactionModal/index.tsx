import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button type="button">
            <span className="green-icon material-symbols-outlined">
              arrow_circle_up
            </span>
            <span className="transaction-type">Entrada</span>
          </button>

          <button type="button">
            <span className="red-icon material-symbols-outlined">
              arrow_circle_down
            </span>
            <span className="transaction-type">Entrada</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" type="text" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
