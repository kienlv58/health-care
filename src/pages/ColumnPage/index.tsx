import React from "react";
import RecommendationCategories from "../../components/ColumnPage/RecommendationCategories";
import RecommendationColumnList from "../../components/ColumnPage/RecommendationColumnList";
import styles from "./ColumnPage.module.scss";

const ColumnPage = () => {
  return (
    <div className={styles.container}>
      <RecommendationCategories />
      <RecommendationColumnList />
    </div>
  );
};
export default ColumnPage;
