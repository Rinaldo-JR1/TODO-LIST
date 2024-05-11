/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CampoTexto, Botao } from "../../components";
import style from "./FormCriarTarefa.module.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const FormCriarTarefa = ({ setTarefas }) => {
  const [nomeTarefa, setNomeTarefa] = useState("");

  const adicionarTarefa = (event) => {
    event.preventDefault();
    if (!nomeTarefa) {
      return;
    }
    setTarefas((estadoAtual) => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: nomeTarefa,
      };
      return [...estadoAtual, tarefa];
    });
    setNomeTarefa("");
  };

  const onChange = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={adicionarTarefa}>
      <CampoTexto value={nomeTarefa} onChange={onChange} />
      <Botao texto={"+"} />
    </form>
  );
};

export { FormCriarTarefa };
