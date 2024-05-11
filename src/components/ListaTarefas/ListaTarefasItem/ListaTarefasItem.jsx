import { Botao, TIPOBOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";
const ListaTarefasItem = (props) => {
  const { nome } = props;
  return (
    <li className={style.ListaTarefasItem}>
      {nome}
      <Botao texto={"-"} tipo={TIPOBOTAO.SECUNDARIO} />
    </li>
  );
};
export { ListaTarefasItem };
