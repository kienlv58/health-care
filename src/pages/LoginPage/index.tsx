import { useContext } from "react";
import Button from "src/components/UI/Button";
import { AuthContext } from "src/context/AuthContext";
import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const onClickLogin = () => {
    authContext.login();
  };

  return (
    <div className={styles.container}>
      <Button title="ログイン" onClick={onClickLogin} />
    </div>
  );
};

export default LoginPage;
