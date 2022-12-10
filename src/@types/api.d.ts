interface BodyIndicator {
  title: string;
  weight: number;
  fat: number;
}
interface HealthIndicator {
  percent: number;
  date: string;
  bodyIndicators: BodyIndicator[];
}

interface MealHistoryItem {
  id: number;
  image?: string;
  date: string;
  category: string;
}

interface MealHistories {
  histories: MealHistoryItem[];
}

interface MyExercise {
  id: number;
  name: string;
  energy: number;
  duration: number;
}
interface MyDiary {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface RecommendationColumn {
  id: number;
  image?: string;
  date: string;
  description: string;
  tags: string[];
}
