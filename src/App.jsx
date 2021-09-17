import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/styles.scss";

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
