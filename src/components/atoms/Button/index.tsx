/**
 * Button
 *
 * @package atoms
 */
import styles from './styles.module.css';
interface ButtonProps {
  buttonName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * @param {} props
 * @returns {JSX.Element}
 */
export const Button = (props: ButtonProps) => {
  const { buttonName, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonName}
    </button>
  );
};
