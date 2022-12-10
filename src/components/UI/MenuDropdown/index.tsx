import styles from "./MenuDropdown.module.scss";
import icon_menu from "../../../asserts/icons/icon_menu.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteMap from "../../../utils/route-map";
import { AuthContext } from "src/context/AuthContext";

const menus = [
  { title: "自分の記録", route: RouteMap.RECORD },
  { title: "体重グラフ", route: RouteMap.TOP },
  { title: "目標", route: "#" },
  { title: "選択中のコース", route: "#" },
  { title: "コラム一覧", route: RouteMap.COLUMN },
  { title: "設定", route: "#" },
];

const MenuDropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (showDropdown) {
          setShowDropdown(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const onClickMenuItem = (route: string) => {
    setShowDropdown(false);
    if (route === RouteMap.LOGOUT) {
      authContext.logout();
    } else navigate(route);
  };

  const renderMenuItem = (title: string, route: string, index: number) => (
    <button
      key={title}
      onClick={() => onClickMenuItem(route)}
      className={`${styles["menu-item"]} ${
        index < menus.length - 1 ? styles["div-line"] : ""
      }`}
    >
      <div>{title}</div>
    </button>
  );

  return (
    <div className={styles.menu}>
      <button
        className={styles["btn-menu"]}
        onClick={() => {
          setShowDropdown(true);
        }}
      >
        <img src={icon_menu} className={styles.logo} alt="menu" />
      </button>
      <ul
        ref={menuRef}
        className={`${styles.dropdown} ${showDropdown ? styles.show : ""}`}
      >
        {menus.map((m, index) => renderMenuItem(m.title, m.route, index))}
        {authContext.isLogin &&
          renderMenuItem("ログアウト", RouteMap.LOGOUT, menus.length)}
      </ul>
    </div>
  );
};
export default MenuDropDown;
