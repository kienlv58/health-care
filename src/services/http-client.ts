// import healIndicatorData from "./dummy-data/health-indicator.json";
import mealHistoriesData from "./dummy-data/meal-histories.json";
import healIndicatorData from "./dummy-data/health-indicator.json";
import myExerciseData from "./dummy-data/my-exercise.json";
import myDiaryData from "./dummy-data/my-diary.json";
import recommendationColumnData from "./dummy-data/recommendation-column.json";

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

export const getMyExercise = async (): Promise<MyExercise[]> => {
  return new Promise<MyExercise[]>((resolve) => {
    setTimeout(() => {
      resolve(myExerciseData);
    }, 0);
  });
};

export const getMyDiary = async (): Promise<MyDiary[]> => {
  return new Promise<MyDiary[]>((resolve) => {
    setTimeout(() => {
      resolve(myDiaryData);
    }, 0);
  });
};

export const getRecommendationColumn = async (): Promise<
  RecommendationColumn[]
> => {
  return new Promise<RecommendationColumn[]>((resolve) => {
    setTimeout(() => {
      resolve(recommendationColumnData);
    }, 0);
  });
};
