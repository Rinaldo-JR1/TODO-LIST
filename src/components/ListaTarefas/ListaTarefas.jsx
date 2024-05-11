import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";
import { UserAppContext } from "../../hooks";
const ListaTarefas = () => {
  const { tarefas } = UserAppContext(); // Import the tarefas state from the AppContext
  return (
    <div>
      {tarefas.length == 0 && <p>Nenhuma tarefa cadastrada</p>}
      <ul className={style.ListaTarefas}>
        {tarefas.map((tarefa) => (
          <ListaTarefasItem key={tarefa.id} id={tarefa.id} nome={tarefa.nome} />
        ))}
      </ul>
    </div>
  );
};

export { ListaTarefas };
