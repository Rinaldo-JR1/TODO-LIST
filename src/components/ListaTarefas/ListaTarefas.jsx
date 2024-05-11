import PropTypes from "prop-types"; // Import PropTypes

import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";
const ListaTarefas = ({ tarefas }) => {
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((tarefa) => (
        <ListaTarefasItem key={tarefa.id} nome={tarefa.nome} />
      ))}
    </ul>
  );
};

// Add prop validation for 'tarefas'
ListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
};

export { ListaTarefas };
