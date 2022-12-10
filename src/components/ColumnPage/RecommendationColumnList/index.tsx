import styles from "./RecommendationColumnList.module.scss";
import image1 from "../../../asserts/images/column-1.jpg";
import image2 from "../../../asserts/images/column-2.jpg";
import image3 from "../../../asserts/images/column-3.jpg";
import image4 from "../../../asserts/images/column-4.jpg";
import image5 from "../../../asserts/images/column-5.jpg";
import image6 from "../../../asserts/images/column-6.jpg";
import image7 from "../../../asserts/images/column-7.jpg";
import image8 from "../../../asserts/images/column-8.jpg";
import Button from "../../UI/Button";
import useColumnData from "src/hooks/useColumnData";
import dayjs from "dayjs";

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
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
];

const RecommendationColumnList = () => {
  const { recommendationColumn } = useColumnData();
  return (
    <>
      <div className={styles["rec-colum-list"]}>
        {recommendationColumn.map((rec, index) => (
          <div key={rec.id} className={styles.item}>
            <div className={styles.square}>
              <div className={styles.content}>
                <div className={styles["wrapper-image"]}>
                  <img src={images[index].image} alt={rec.description} />
                  <div className={styles["date-time"]}>
                    {dayjs(rec.date).format("YYYY.MM.DD HH:mm")}
                  </div>
                </div>
                <div className={styles.desc}>{rec.description}</div>
                <div className={styles.tags}>
                  {rec.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button title="コラムをもっと見る" />
    </>
  );
};

export default RecommendationColumnList;
