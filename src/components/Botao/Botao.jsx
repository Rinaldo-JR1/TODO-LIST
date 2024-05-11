import style from './Botao.module.css';
import {TIPOBOTAO} from './constants'
const Botao = (props) => {
  const { texto, type = TIPOBOTAO.PRIMARIO } = props;
  return (
    <button tipo={type} {...props} className={style.Botao}>
      {texto}
    </button>
  );
};
export { Botao };
