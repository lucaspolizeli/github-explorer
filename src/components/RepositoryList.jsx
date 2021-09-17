import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "pastel",
  link: "https://github.com/",
};

export function RepositoryList() {
  return (
    <section className="respository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
