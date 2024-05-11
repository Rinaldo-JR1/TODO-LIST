import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";
const ListaTarefas = () => {
  const tarefas = [
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
  ];
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((tarefa) => (
        <ListaTarefasItem key={tarefa.id} nome={tarefa.nome} />
      ))} 
    </ul>
  );
};

export { ListaTarefas };
