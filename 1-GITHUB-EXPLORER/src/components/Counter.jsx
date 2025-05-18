import { useState } from "react";

// hook -> gancho

// imutabilidade -> não pode alterar o conteúdo dela diretamente mas posso dar um novo valor para ela
// const usuarios = ["pedro", "Dudu", "Damas"];
// usuarios.push("Novo user");
// Estou realizando uma mutação no valor de uma variável, coisa que não fazem no react
// O correto seria
// novoUsuario = [...usuarios, "Novo user"]
// Sempre crio um novo espaço na memoria com a nova info do que alterar o dado que já tem na memória

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
