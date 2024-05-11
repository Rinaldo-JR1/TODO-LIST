import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <Link to={"/"}>
        <h1>
          <span>TODO</span> List
        </h1>
      </Link>
      <Link to={"/sobre"}>
        <h1>
          Sobre
        </h1>
      </Link>
    </div>
  );
};

export { Cabecalho };
