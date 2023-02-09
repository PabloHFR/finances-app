import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Trabalho</td>
            <td className="deposit">R$7.000</td>
            <td>Desenvolvimento</td>
            <td>09/02/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$2.000</td>
            <td>Casa</td>
            <td>09/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
