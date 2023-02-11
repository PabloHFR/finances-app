import Modal from "react-modal";
import { Container } from "./styles";

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
        <input placeholder="Categoria" type="text" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
