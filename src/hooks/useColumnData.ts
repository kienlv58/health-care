import { useEffect } from "react";
import { useState } from "react";
import { getRecommendationColumn } from "src/services/http-client";

const useColumnData = () => {
  const [recommendationColumn, setRecommendationColumn] = useState<
    RecommendationColumn[]
  >([]);

  useEffect(() => {
    getRecommendationColumn().then((data) => {
      setRecommendationColumn(data);
    });
  }, []);

  return { recommendationColumn };
};

export default useColumnData;
