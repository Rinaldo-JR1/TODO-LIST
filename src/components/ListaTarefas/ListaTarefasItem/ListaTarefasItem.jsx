/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Loading } from "../../../components";
import { UserAppContext } from "../../../hooks";
import { Botao, TIPOBOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";
import { CampoTexto } from "../../CampoTexto";
const ListaTarefasItem = (props) => {
  const { removerTarefa, editarTarefa, loadingDeletar, loadingEditar } =
    UserAppContext();
  const { nome, id } = props;
  // eslint-disable-next-line no-unused-vars
  const [editando, setEditando] = useState(false);
  const blur = (e) => {
    editarTarefa(id, e.currentTarget.value);
    setEditando(false);
  };

  const LoadingestaEditando = loadingEditar == id;
  const LoadingEstaDeletando = loadingDeletar == id;

  return (
    <li className={style.ListaTarefasItem}>
      {LoadingestaEditando ||
        (editando && (
          <CampoTexto defaultValue={nome} onBlur={blur} autoFocus />
        ))}
      {!editando && !LoadingestaEditando && (
        <span
          onDoubleClick={() => {
            setEditando(true);
          }}
        >
          {nome}
        </span>
      )}
      {LoadingestaEditando && <Loading />}
      <Botao
        texto={LoadingEstaDeletando || LoadingestaEditando ? <Loading /> : "-"}
        tipo={TIPOBOTAO.SECUNDARIO}
        onClick={() => {
          removerTarefa(id);
        }}
      />
    </li>
  );
};
export { ListaTarefasItem };
