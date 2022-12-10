import { useRef } from "react";
import useMyRecordData from "src/hooks/useMyRecordData";
import BodyRecordGraph from "../../components/RecordPage/BodyRecordGraph";
import MyDiary from "../../components/RecordPage/MyDiary";
import MyExercise from "../../components/RecordPage/MyExercise";
import RecordCategories from "../../components/RecordPage/RecordCategories";
import styles from "./MyRecordPage.module.scss";

const MyRecordPage = () => {
  const recordGraphRef = useRef<HTMLDivElement>(null);
  const myExerciseRef = useRef<HTMLDivElement>(null);
  const myDiaryRef = useRef<HTMLDivElement>(null);

  const { myExercise, myDiary } = useMyRecordData();

  const scrollToComponent = (id: number) => {
    switch (id) {
      case 1:
        recordGraphRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        myExerciseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        myDiaryRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className={styles.container}>
      <RecordCategories scrollToComponent={scrollToComponent} />
      <BodyRecordGraph ref={recordGraphRef} />
      <MyExercise ref={myExerciseRef} myExercise={myExercise} />
      <MyDiary ref={myDiaryRef} myDiary={myDiary} />
    </div>
  );
};
export default MyRecordPage;
