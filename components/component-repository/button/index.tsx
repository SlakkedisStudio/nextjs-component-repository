import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
interface Props {
//   children: Array<any>;
}

const Button : React.FC<Props> = ({ children }) => {
  const s = useStyles(styles);
  return <button className={s('button')}>
    {children ? children : 'I am a button'}
  </button>;
};

export default Button;
