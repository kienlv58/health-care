import { forwardRef } from "react";
import styles from "./MyExercise.module.scss";

const exercise = [
  {
    id: 1,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 2,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 3,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 4,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 5,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 6,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 11,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 7,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 8,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 9,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
  {
    id: 10,
    name: "家事全般（立位・軽い）",
    energy: 26,
    duration: 10,
  },
];
const MyExercise = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <div ref={ref} className={styles["my-exercise"]}>
      <div className={styles.header}>
        <div>
          <div>MY</div>
          <div>EXERCISE</div>
        </div>
        <div className={styles.date}>2021.05.21</div>
      </div>
      <div className={styles["list-exercise"]}>
        {exercise.map(({ id, name, energy, duration }) => (
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
