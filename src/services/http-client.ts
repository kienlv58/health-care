// import healIndicatorData from "./dummy-data/health-indicator.json";
import mealHistoriesData from "./dummy-data/meal-histories.json";
const healIndicatorData = require("./dummy-data/health-indicator.json");

export enum DURATION_TYPE {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

const randomValueDay = [...Array(12)].map((e, i) => Math.random() * 10);
const randomValueWeek = [...Array(12)].map((e, i) => Math.random() * 10);
const randomValueYear = [...Array(12)].map((e, i) => Math.random() * 10);

const randomDataByDurationType = (durationType: DURATION_TYPE) => {
  const temp = { ...healIndicatorData };
  let bodyIndicators = [...temp.bodyIndicators];
  switch (durationType) {
    case DURATION_TYPE.DAY:
      bodyIndicators = bodyIndicators.map((item, index) => ({
        ...item,
        weight: item.weight + randomValueDay[index],
        fat: item.fat + randomValueDay[index],
        title: `${item.title} 日`,
      }));
      break;
    case DURATION_TYPE.WEEK:
      bodyIndicators = bodyIndicators.map((item, index) => ({
        ...item,
        weight: item.weight + randomValueWeek[index],
        fat: item.fat + randomValueWeek[index],
        title: item.title + " 週",
      }));
      break;
    case DURATION_TYPE.MONTH:
      bodyIndicators = bodyIndicators.map((item) => ({
        ...item,
        title: item.title + " 月",
      }));
      break;
    case DURATION_TYPE.YEAR:
      bodyIndicators = bodyIndicators.map((item, index) => ({
        ...item,
        weight: item.weight + randomValueYear[index],
        fat: item.fat + randomValueYear[index],
        title: item.title + " 年",
      }));
      break;
  }
  temp.bodyIndicators = bodyIndicators;
  return temp;
};

export const getHealthIndicator = async (
  durationType: DURATION_TYPE = DURATION_TYPE.MONTH,
): Promise<HealthIndicator> => {
  return new Promise<HealthIndicator>((resolve) => {
    setTimeout(() => {
      resolve(randomDataByDurationType(durationType));
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
