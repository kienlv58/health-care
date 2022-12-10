import dayjs from "dayjs";
import { forwardRef } from "react";
import Button from "../../UI/Button";
import styles from "./MyDiary.module.scss";

interface Props {
  myDiary: MyDiary[];
}

const MyDiary = forwardRef<HTMLDivElement, Props>(({ myDiary }, ref) => {
  return (
    <div ref={ref} className={styles["my-diary"]}>
      <div className={styles.header}>MY DIARY</div>
      <div className={styles["list-diary"]}>
        {myDiary.map(({ id, title, content, date }) => (
          <div key={id} className={styles.item}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div>{dayjs(date).format("YYYY.MM.DD")}</div>
                <div className={styles.time}>{dayjs(date).format("HH:mm")}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button title="自分の日記をもっと見る" />
    </div>
  );
});

export default MyDiary;
