import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <span className="green-icon material-symbols-outlined">
            arrow_circle_up
          </span>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <span className="red-icon material-symbols-outlined">
            arrow_circle_down
          </span>
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <span className="material-symbols-outlined">attach_money</span>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
