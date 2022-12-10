import styles from "./BodyRecordGraph.module.scss";
import BodyIndicatorGraph from "../../Share/BodyIndicatorGraph";
import { forwardRef, useState } from "react";
import useBodyIndicatorData from "src/hooks/useBodyIncatorData";
import { DURATION_TYPE } from "src/services/http-client";

const BodyRecordGraph = forwardRef<HTMLDivElement>((_, ref) => {
  const [durationType, setDurationType] = useState<DURATION_TYPE>(
    DURATION_TYPE.MONTH,
  );
  const { bodyIndicators } = useBodyIndicatorData(durationType);

  const onUpdateDurationType = (durationType: DURATION_TYPE) => {
    setDurationType(durationType);
  };

  const renderButton = (title: string, type: DURATION_TYPE) => {
    const activeClass = durationType === type ? styles.active : "";
    return (
      <button
        className={`${styles.btn} ${activeClass}`}
        onClick={() => {
          onUpdateDurationType(type);
        }}
      >
        {title}
      </button>
    );
  };

  return (
    <div ref={ref} className={styles.graph}>
      <div className={styles.header}>
        <div>
          <div>BODY</div>
          <div>RECORD</div>
        </div>
        <div className={styles.date}>2021.05.21</div>
      </div>
      <div className={styles["wrapper-graph-body"]}>
        <BodyIndicatorGraph bodyIndicators={bodyIndicators} />
      </div>
      <div className={styles.action}>
        {renderButton("日", DURATION_TYPE.DAY)}
        {renderButton("週", DURATION_TYPE.WEEK)}
        {renderButton("月", DURATION_TYPE.MONTH)}
        {renderButton("年", DURATION_TYPE.YEAR)}
      </div>
    </div>
  );
});

export default BodyRecordGraph;
