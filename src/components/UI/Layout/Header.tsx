import { Link } from "react-router-dom";
import RouteMap from "../../../utils/route-map";
import logo from "../../../asserts/icons/logo.svg";
import icon_memo from "../../../asserts/icons/icon_memo.svg";
import icon_challenge from "../../../asserts/icons//icon_challenge.svg";
import icon_info from "../../../asserts/icons/icon_info.svg";

import styles from "./Layout.module.scss";
import MenuDropDown from "../MenuDropdown";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Link to={RouteMap.HOME}>
          <img src={logo} className={styles.icon} alt="logo" />
        </Link>
      </div>
      <div className={styles["wrapper-navigation"]}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link className={styles.item} to={RouteMap.RECORD}>
                <img src={icon_memo} className={styles.icon} alt="自分の記録" />
                <span>自分の記録</span>
              </Link>
            </li>
            <li>
              <Link className={styles.item} to={RouteMap.HOME}>
                <img
                  src={icon_challenge}
                  className={styles.icon}
                  alt="チャレンジ"
                />
                <span>チャレンジ</span>
              </Link>
            </li>
            <li>
              <Link className={styles.item} to={RouteMap.HOME}>
                <div className={styles["noti-record"]}>
                  <div className={styles.notification}>1</div>
                  <img src={icon_info} className={styles.icon} alt="お知らせ" />
                </div>
                <span>お知らせ</span>
              </Link>
            </li>
          </ul>
        </nav>
        <MenuDropDown />
      </div>
    </div>
  );
};

export default Header;
