import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Vault" />
        {/* <p>Seu controle financeiro na sua mão</p> */}

        <button>Nova Transação</button>
      </Content>
    </Container>
  );
}
