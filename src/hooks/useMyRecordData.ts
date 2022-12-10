import { useEffect } from "react";
import { useState } from "react";
import { getMyExercise, getMyDiary } from "src/services/http-client";
const useMyRecordData = () => {
  const [myExercise, setMyExercise] = useState<MyExercise[]>([]);
  const [myDiary, setMyDiary] = useState<MyDiary[]>([]);

  useEffect(() => {
    getMyExercise().then((data) => {
      setMyExercise(data);
    });

    getMyDiary().then((data) => {
      setMyDiary(data);
    });
  }, []);

  return { myExercise, myDiary };
};

export default useMyRecordData;
