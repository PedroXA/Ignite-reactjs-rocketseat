import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de APP</td>
            <td className="deposit">R$1000</td>
            <td>Desenvolvimento</td>
            <td>12/06/2025</td>
          </tr>

          <tr>
            <td>Pagamento do Aluguel</td>
            <td className="withdraw">- R$500</td>
            <td>Casa</td>
            <td>02/06/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
