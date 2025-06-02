import { Container } from "./styles";
import positiveIncome from "../../assets/indicativo-positivo.svg";
import negativeIncome from "../../assets/indicativo-negativo.svg";
import totalIncome from "../../assets/indicativo-dinheiro.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={positiveIncome} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={negativeIncome} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIncome} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
