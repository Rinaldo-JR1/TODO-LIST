import PropTypes from "prop-types";

import style from './Rodape.module.css';
const Rodape = (props) => {
  const { criador } = props;
  const dataAtual = new Date().getFullYear();
  return (
    <div className={style.Rodape}>
      React Basico - - {criador} -- {dataAtual}
    </div>
  );
};

Rodape.propTypes = {
  criador: PropTypes.string.isRequired,
};

export { Rodape };
