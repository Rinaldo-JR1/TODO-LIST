/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CampoTexto, Botao, Loading } from "../../components";
import style from "./FormCriarTarefa.module.css";
import { UserAppContext } from "../../hooks";

const FormCriarTarefa = () => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { criarTarefa, loadingCriar } = UserAppContext();
  const adicionarTarefa = (event) => {
    event.preventDefault();
    if (!nomeTarefa) {
      return;
    }
    criarTarefa(nomeTarefa);
    setNomeTarefa("");
  };

  const onChange = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={adicionarTarefa}>
      <CampoTexto value={nomeTarefa} onChange={onChange} />
      <Botao texto={loadingCriar ? <Loading/> : '+' } />
    </form>
  );
};

export { FormCriarTarefa };
