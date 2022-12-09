import AchievementRate from "../AchievementRate";
import BodyIndicatorGraph from "../../Share/BodyIndicatorGraph";
import styles from "./HealthIndicator.module.scss";

interface Props {
  healthIndicator: HealthIndicator;
}

const HealthIndicator = ({ healthIndicator }: Props) => {
  return (
    <div className={styles.chart}>
      <div className={styles["achievement-rate"]}>
        <AchievementRate
          percentage={healthIndicator.percent}
          date={healthIndicator.date}
        />
      </div>
      <div className={styles["graph-content"]}>
        <BodyIndicatorGraph bodyIndicators={healthIndicator.bodyIndicators} />
      </div>
    </div>
  );
};

export default HealthIndicator;
