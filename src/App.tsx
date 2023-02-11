import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

// Styles imports
import { GlobalStyle } from "./styles/globalStyles";

Modal.setAppElement("#root");

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
