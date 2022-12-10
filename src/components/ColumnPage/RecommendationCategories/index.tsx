import styles from "./RecommendationCategories.module.scss";

const recommendationCate = [
  {
    id: 1,
    title: "RECOMMENDED COLUMN",
    subTitle: "オススメ",
  },
  {
    id: 2,
    title: "RECOMMENDED DIET",
    subTitle: "ダイエット",
  },
  {
    id: 3,
    title: "RECOMMENDED BEAUTY",
    subTitle: "美容",
  },
  {
    id: 4,
    title: "RECOMMENDED HEALTH",
    subTitle: "健康",
  },
];

const RecommendationCategories = () => {
  return (
    <div className={styles["rec-categories"]}>
      {recommendationCate.map(({ id, title, subTitle }) => (
        <div key={id} className={styles.item}>
          <button className={styles.btn}>
            <div className={styles.title}>{title.split(" ")[0]}</div>
            <div className={styles.title}>{title.split(" ")[1]}</div>
            <div className={styles.row} />
            <div className={styles["sub-title"]}>{subTitle}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationCategories;
