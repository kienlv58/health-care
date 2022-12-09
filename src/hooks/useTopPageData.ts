import { useEffect } from "react";
import { useState } from "react";
import { getHealthIndicator, getMealHistories } from "src/services/http-client";
const useTopPageData = () => {
  const [healthIndicator, setHealthIndicator] = useState<HealthIndicator>();
  const [mealHistories, setMealHistories] = useState<MealHistoryItem[]>([]);
  useEffect(() => {
    getHealthIndicator().then((data) => {
      setHealthIndicator(data);
    });
    getMealHistories().then((data) => {
      setMealHistories(data.histories);
    });
  }, []);

  return { healthIndicator, mealHistories };
};

export default useTopPageData;
