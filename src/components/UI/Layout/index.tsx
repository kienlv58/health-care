import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";
import ScrollButton from "../ScrollButton";

const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles["wrapper-main"]}>
          <div className={styles.main}>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      <ScrollButton />
    </>
  );
};
export default Layout;
