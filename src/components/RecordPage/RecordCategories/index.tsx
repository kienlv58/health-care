import styles from "./RecordCategories.module.scss";
import bodyImage from "../../../asserts/images/MyRecommend-1.jpg";
import exerciseImage from "../../../asserts/images/MyRecommend-2.jpg";
import diaryImage from "../../../asserts/images/MyRecommend-3.jpg";

const recordCate = [
  {
    id: 1,
    image: bodyImage,
    title: "BODY RECORD",
    subTitle: "自分のカラダの記録",
  },
  {
    id: 2,
    image: exerciseImage,
    title: "MY EXERCISE",
    subTitle: "自分の運動の記録",
  },
  {
    id: 3,
    image: diaryImage,
    title: "MY DIARY",
    subTitle: "自分の日記",
  },
];

interface Props {
  scrollToComponent: (id: number) => void;
}
const RecordCategories = ({ scrollToComponent }: Props) => {
  const onItemClick = (id: number) => {
    scrollToComponent(id);
  };
  return (
    <div className={styles["record-categories"]}>
      {recordCate.map(({ id, title, subTitle, image }) => (
        <div key={id} className={styles.item}>
          <button className={styles.square} onClick={() => onItemClick(id)}>
            <div className={styles["sub-square"]}>
              <img src={image} alt={title} />
              <div className={styles["wrapper-title"]}>
                <div className={styles.title}>{title}</div>
                <div className={styles["sub-title"]}>{subTitle}</div>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecordCategories;
