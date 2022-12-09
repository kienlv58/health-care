import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import dayjs from "dayjs";
import styles from "./AchievementRate.module.scss";

interface Props {
  percentage: number;
  date: string;
}

const AchievementRate = ({ percentage, date }: Props) => {
  return (
    <div className={styles["circle-bar"]}>
      <CircularProgressbarWithChildren
        strokeWidth={2}
        className={styles["shadow"]}
        value={percentage}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: `#FFFFFF`,
          textColor: "#FFFFFF",
          trailColor: "transparent",
          pathTransitionDuration: 5,
        })}
      >
        <div className={styles["percent-content"]}>
          {dayjs(date).format("MM.DD")} <span>{percentage} %</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default AchievementRate;
