import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";
import { UserAppContext } from "../../hooks";
import { Loading } from "../Loading";
const ListaTarefas = () => {
  const { tarefas, loadingCarregar } = UserAppContext(); // Import the tarefas state from the AppContext
  return (
    <div>
      {loadingCarregar && (
        <p>
          Carregando...
          <Loading />
        </p>
      )}
      {!loadingCarregar && tarefas.length == 0 && (
        <p>Nenhuma tarefa cadastrada</p>
      )}
      <ul className={style.ListaTarefas}>
        {tarefas.map((tarefa) => (
          <ListaTarefasItem key={tarefa.id} id={tarefa.id} nome={tarefa.nome} />
        ))}
      </ul>
    </div>
  );
};

export { ListaTarefas };
