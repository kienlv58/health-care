import dayjs from "dayjs";
import { forwardRef } from "react";
import styles from "./MyExercise.module.scss";

interface Props {
  myExercise: MyExercise[];
}

const MyExercise = forwardRef<HTMLDivElement, Props>(({ myExercise }, ref) => {
  return (
    <div ref={ref} className={styles["my-exercise"]}>
      <div className={styles.header}>
        <div>
          <div>MY</div>
          <div>EXERCISE</div>
        </div>
        <div className={styles.date}>
          {dayjs("2021-05-21").format("YYYY.MM.DD")}
        </div>
      </div>
      <div className={styles["list-exercise"]}>
        {myExercise.map(({ id, name, energy, duration }) => (
          <div key={id} className={styles.item}>
            <div className={styles.container}>
              <div className={styles["main-content"]}>
                <div className={styles.dot}></div>
                <div className={styles["content"]}>
                  <div className={styles.info}>
                    <div>{name}</div>
                    <div className={styles.duration}>{duration} min</div>
                  </div>
                  <div className={styles.energy}>{energy}kcal</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default MyExercise;
