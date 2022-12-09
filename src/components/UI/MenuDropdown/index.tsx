import styles from "./MenuDropdown.module.scss";
import icon_menu from "../../../asserts/icons/icon_menu.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteMap from "../../../utils/route-map";

const menus = [
  { title: "自分の記録", route: RouteMap.RECORD },
  { title: "体重グラフ", route: RouteMap.HOME },
  { title: "目標", route: RouteMap.HOME },
  { title: "選択中のコース", route: RouteMap.HOME },
  { title: "コラム一覧", route: RouteMap.COLUMN },
  { title: "設定", route: RouteMap.HOME },
];

const MenuDropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

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
    navigate(route);
  };

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
        {menus.map((m, index) => (
          <button
            key={m.title}
            onClick={() => onClickMenuItem(m.route)}
            className={`${styles["menu-item"]} ${
              index < menus.length - 1 ? styles["div-line"] : ""
            }`}
          >
            <div>{m.title}</div>
          </button>
        ))}
      </ul>
    </div>
  );
};
export default MenuDropDown;
