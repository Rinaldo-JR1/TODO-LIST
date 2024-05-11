import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { UserAppContext } from "../../hooks";

const LayoutPadrao = () => {
  const { criador } = UserAppContext();
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={criador} />
    </>
  );
};
export { LayoutPadrao };
