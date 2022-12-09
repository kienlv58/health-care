import { DURATION_TYPE } from "./../services/http-client";
import { useEffect } from "react";
import { useState } from "react";
import { getHealthIndicator } from "src/services/http-client";
const useBodyIndicatorData = (durationType: DURATION_TYPE) => {
  const [bodyIndicators, setBodyIndicators] = useState<BodyIndicator[]>([]);

  useEffect(() => {
    getHealthIndicator(durationType).then((data) => {
      setBodyIndicators(data.bodyIndicators);
    });
  }, [durationType]);

  return { bodyIndicators };
};

export default useBodyIndicatorData;
