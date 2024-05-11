import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [criador, setCriador] = useState("Rinaldo");
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar React" },
    { id: 2, nome: "Estudar CSS" },
    { id: 3, nome: "Estudar HTML" },
  ]);

  const criarTarefa = (novaTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: novaTarefa,
      };
      return [...estadoAtual, tarefa];
    });
  };
  const removerTarefa = (id) => {
    setTarefas((estadoAtual) => {
      return estadoAtual.filter((tarefa) => tarefa.id != id);
    });
  };
  const editarTarefa = (id, novoNome) => {
    setTarefas((estadoAtual) => {
      return estadoAtual.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, nome: novoNome };
        }
        return tarefa;
      });
    });
  };
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <AppContext.Provider
      value={{
        criador,
        tarefas,
        criarTarefa,
        setCriador,
        removerTarefa,
        editarTarefa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
