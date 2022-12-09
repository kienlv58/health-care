import styles from "./MealHistory.module.scss";
import dayjs from "dayjs";

import image1 from "../../../asserts/images/d02.jpg";
import image2 from "../../../asserts/images/l01.jpg";
import image3 from "../../../asserts/images/l02.jpg";
import image4 from "../../../asserts/images/l03.jpg";
import Button from "../../UI/Button";

const images = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
];

interface Props {
  mealHistories: MealHistoryItem[];
}

const MealHistory = ({ mealHistories }: Props) => {
  return (
    <>
      <div className={styles["meal-history"]}>
        {mealHistories.map((his, index) => (
          <div key={his.id} className={styles.item}>
            <div className={styles.square}>
              <img src={images[index].image} alt={his.category} />
              <div className={styles.title}>
                {dayjs(his.date).format("MM.DD")}.{his.category}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button title="記録をもっと見る" />
    </>
  );
};

export default MealHistory;
