/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [criador, setCriador] = useState("Rinaldo");
  const [tarefas, setTarefas] = useState([]);

  const [loadingCarregar, setLoadingCarregar] = useState(false);
  const [loadingCriar, setLoadingCriar] = useState(false);

  const [loadingEditar, setLoadingEditar] = useState(null);
  const [loadingDeletar, setLoadingDeletar] = useState(null);
  const carregarTarefas = async () => {
    setLoadingCarregar(true);
    await api.get("/tarefas").then((response) => {
      setTarefas(response.data || []);
    });
    setLoadingCarregar(false);
  };
  useEffect(() => {
    carregarTarefas();
  }, []);

  const criarTarefa = async (novaTarefa) => {
    setLoadingCriar(true);
    const { data: tarefa } = await api.post("/tarefas", {
      nome: novaTarefa,
    });
    setTarefas((estadoAtual) => {
      return [...estadoAtual, tarefa];
    });
    setLoadingCriar(false);
  };
  const removerTarefa = async (id) => {
    setLoadingDeletar(id);
    await api.delete(`/tarefas/${id}`);
    setTarefas((estadoAtual) => {
      return estadoAtual.filter((tarefa) => tarefa.id != id);
    });
    setLoadingDeletar(null);
  };
  const editarTarefa = async (id, novoNome) => {
    setLoadingEditar(id);
    const { data: tarefaAtualizada } = await api.put(`/tarefas/${id}`, {
      nome: novoNome,
    });

    setTarefas((estadoAtual) => {
      return estadoAtual.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, nome: tarefaAtualizada.nome };
        }
        return tarefa;
      });
    });
    setLoadingEditar(null);
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
        carregarTarefas,
        loadingCarregar,
        loadingCriar,
        loadingEditar,
        loadingDeletar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
