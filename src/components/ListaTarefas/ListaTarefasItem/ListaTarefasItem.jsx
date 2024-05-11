/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserAppContext } from "../../../hooks";
import { Botao, TIPOBOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";
import { CampoTexto } from "../../CampoTexto";
const ListaTarefasItem = (props) => {
  const { removerTarefa, editarTarefa } = UserAppContext();
  const { nome, id } = props;
  // eslint-disable-next-line no-unused-vars
  const [editando, setEditando] = useState(false);

  return (
    <li className={style.ListaTarefasItem}>
      {editando && (
        <CampoTexto
          defaultValue={nome}
          onChange={(e) => editarTarefa(id, e.currentTarget.value)}
          onBlur={() => {
            setEditando(false);
          }}
          autoFocus
        />
      )}
      {!editando && (
        <span
          onDoubleClick={() => {
            setEditando(true);
          }}
        >
          {nome}
        </span>
      )}
      <Botao
        texto={"-"}
        tipo={TIPOBOTAO.SECUNDARIO}
        onClick={() => {
          removerTarefa(id);
        }}
      />
    </li>
  );
};
export { ListaTarefasItem };
