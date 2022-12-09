import styles from "./Button.module.scss";
interface Props {
  title: string;
  onClick?: () => void;
}
const Button = ({ title, onClick }: Props) => {
  return (
    <div className={styles.btn}>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
