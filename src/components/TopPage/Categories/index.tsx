import styles from "./Categories.module.scss";

import icon_knife from "../../../asserts/icons/icon_knife.svg";
import icon_cup from "../../../asserts/icons/icon_cup.svg";

const categories = [
  {
    icon: icon_knife,
    name: "Morning",
  },
  {
    icon: icon_knife,
    name: "Lunch",
  },
  {
    icon: icon_knife,
    name: "Dinner",
  },
  {
    icon: icon_cup,
    name: "Snack",
  },
];

const Categories = () => {
  return (
    <div className={styles.category}>
      {categories.map((cate) => (
        <div className={styles.item} key={cate.name}>
          <img src={cate.icon} alt={cate.name} />
          <div>{cate.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
