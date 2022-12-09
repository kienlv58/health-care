import { useEffect } from "react";
import { useState } from "react";
import { getHealthIndicator } from "src/services/http-client";
const useMyRecordData = () => {
  const [bodyIndicators, setBodyIndicators] = useState<BodyIndicator[]>([]);

  useEffect(() => {
    getHealthIndicator().then((data) => {
      setBodyIndicators(data.bodyIndicators);
    });
  }, []);

  return { bodyIndicators };
};

export default useMyRecordData;
