import "react-circular-progressbar/dist/styles.css";

import styles from "./TopPage.module.scss";
import Categories from "../../components/TopPage/Categories";
import MealHistory from "../../components/TopPage/MealHistory";
import HealthIndicator from "../../components/TopPage/HealthIndicator";
import useTopPageData from "src/hooks/useTopPageData";

const TopPage = () => {
  const { healthIndicator, mealHistories } = useTopPageData();
  return (
    <div className={styles.container}>
      {healthIndicator && <HealthIndicator healthIndicator={healthIndicator} />}
      <Categories />
      <MealHistory mealHistories={mealHistories} />
    </div>
  );
};
export default TopPage;
