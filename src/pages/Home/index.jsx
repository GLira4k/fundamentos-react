import React from "react";
import "./styles.css";
import { Card } from "../../components/Card";
import { useState } from "react";

export function Home() {
  //const [aonde eu vou guardar o conteúdo do estado, qual a função que atualiza esse estado] = useState();

  const [studentName, setStudentName] = useState(" ");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    
    // setStudents(Estado anterior => [spread operator estado anterior, novo estado]);
    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <main>
      <section className="container">
        <h1>Lista de Presença</h1>
        <input
          required
          type="text"
          className="input"
          placeholder="Digite um nome"
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="button" className="btn" onClick={handleAddStudent}>
          Adicionar
        </button>
        {students.map((student) => (
          <Card name={student.name} time={student.time} />
        ))}
      </section>
    </main>
  );
}

//uma variavel comum não tem o poder de refletir na interface o novo conteúdo, por isso utilizamos state.

//Ao gerar uma alteração de estado ele provoca uma nova renderização, refletindo na interface o novo conteúdo.

//React tem um algoritmo chamado de Algoritmo de Reconciliação para fazer essa atualização.
