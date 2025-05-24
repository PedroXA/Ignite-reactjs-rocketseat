import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // Ela já é executada por padrão
  // o useEffect recebe dois parâmetros: A função que ela vai executar e quando vou querer executar a função que eu decidi
  // se eu passar o array de dependencias vazio, o hook vai executar somente uma vez pois ele não tem algo para monitorar caso algo mude
  // e caso deixar vazio ele vai ficar em loop

  // Utilizando o useEffect para fazer uma chamada de API
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos") // Buscando os dados da API utilizando o fetch
      .then((Response) => Response.json()) // Pegando o resultado "Response" e transformando em JSON
      .then((data) => setRepositories(data)); // Colocando todo o resultado na minha função setRepositories
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repositories) => {
          return (
            <RepositoryItem key={repositories.name} repository={repositories} />
          );
        })}
      </ul>
    </section>
  );
}
