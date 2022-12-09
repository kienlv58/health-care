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
