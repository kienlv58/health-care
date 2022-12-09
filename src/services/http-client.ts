import healIndicatorData from "./dummy-data/health-indicator.json";
import mealHistoriesData from "./dummy-data/meal-histories.json";

export const getHealthIndicator = async (): Promise<HealthIndicator> => {
  return new Promise<HealthIndicator>((resolve) => {
    setTimeout(() => {
      resolve(healIndicatorData);
    }, 0);
  });
};

export const getMealHistories = async (): Promise<MealHistories> => {
  return new Promise<MealHistories>((resolve) => {
    setTimeout(() => {
      resolve(mealHistoriesData);
    }, 0);
  });
};
