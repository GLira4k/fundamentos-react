import "./styles.css";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input required type="text" className="input" />
      <button type="button" className="btn">
        Adicionar
      </button>
    </div>
  );
}
