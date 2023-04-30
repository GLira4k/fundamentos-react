import React from "react";
import "./styles.css";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";

//React Hoocks são funções que permitem ligar, conectar os recursos de estado e ciclo de vida do React a partir de componentes totalmente funcionais.


export function Home() {
  //const [aonde eu vou guardar o conteúdo do estado, qual a função que atualiza esse estado] = useState();

  const [studentName, setStudentName] = useState(" ");

  const [students, setStudents] = useState([]);

  const [user, setUser] = useState({ name:'', avatar:'' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    // setStudents(Estado anterior => [spread operator + estado anterior, novo estado]);
    setStudents((prevState) => [...prevState, newStudent]);
  }

/*
O useEffect é executado automaticamente quando a interface é renderizada

useEffect(() => {
  corpo do useEffect, serão as ações ou aquilo que quero que execute.
}, [array de estados que o array depende para uma nova execução])

toda vez que o estado de alguma dependência do useEffect for atualizado, gerará uma nova execução

*/

  useEffect(() => {
    fetch('https://api.github.com/users/GLira4k')
    .then(response => response.json())
    .then(data =>{
      setUser({
        name:data.name,
        avatar:data.avatar_url
      })
    })
  }, []);

  return (
    <main>
      <section className="container">
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto de Perfil" />
          </div>
        </header>
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
        {students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))}
      </section>
    </main>
  );
}

//uma variavel comum não tem o poder de refletir na interface o novo conteúdo, por isso utilizamos state.

//Ao gerar uma alteração de estado ele provoca uma nova renderização, refletindo na interface o novo conteúdo.

//React tem um algoritmo chamado de Algoritmo de Reconciliação para fazer essa atualização.
