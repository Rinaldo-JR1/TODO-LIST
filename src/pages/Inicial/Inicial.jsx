import { useState } from "react";
import { FormCriarTarefa, ListaTarefas } from "../../components";
import style from "./Inicial.module.css";
const Inicial = () => {
  // eslint-disable-next-line no-unused-vars
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar React" },
    { id: 2, nome: "Estudar CSS" },
    { id: 3, nome: "Estudar HTML" },
  ]);

  return (
    <div className={style.Inicial}>
      <FormCriarTarefa  setTarefas={setTarefas} />
      <ListaTarefas tarefas={tarefas} />
    </div>
  );
};
export { Inicial };
