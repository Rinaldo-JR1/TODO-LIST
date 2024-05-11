import PropTypes from "prop-types";
import style from "./Conteudo.module.css";
const Conteudo = (props) => {
  const { children } = props;
  return <div className={style.Conteudo}>{children}</div>;
};

Conteudo.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Conteudo };
