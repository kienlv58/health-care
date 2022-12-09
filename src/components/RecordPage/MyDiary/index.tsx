import { forwardRef } from "react";
import Button from "../../UI/Button";
import styles from "./MyDiary.module.scss";

const diaryList = [
  {
    id: 1,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 2,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 3,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 4,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 5,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 6,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 7,
    title: "私の日記の記録が一部表示されます。。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
  {
    id: 8,
    title: "私の日記の記録が一部表示されます。",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    date: "2021.05.21",
    time: "23:25",
  },
];

const MyDiary = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={styles["my-diary"]}>
      <div className={styles.header}>MY DIARY</div>
      <div className={styles["list-diary"]}>
        {diaryList.map(({ id, title, content, date, time }) => (
          <div key={id} className={styles.item}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div>{date}</div>
                <div className={styles.time}>{time}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button title="自分の日記をもっと見る" />
    </div>
  );
});

export default MyDiary;
