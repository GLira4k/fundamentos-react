import "./styles.css";
import { Card } from '../../components/Card';

export function Home() {
  return (
    <main>
      <section className="container">
        <h1>Lista de Presença</h1>
        <input required type="text" className="input" placeholder="Digite um nome"/>
        <button type="button" className="btn"> 
          Adicionar
        </button>
        <Card name="Germano" time="09:02:14"/>
        <Card name="Gabriel" time="10:25:51"/>
        <Card name="Lucas" time="11:37:44"/> 
      </section>
    </main>
  );
}
