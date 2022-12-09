import styles from "./BodyIndicatorGraph.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      display: false,
    },
    y1: {
      display: false,
    },
    x: {
      grid: {
        color: "#777777",
      },
      ticks: {
        color: "#ffffff",
        fontSize: 14,
      },
    },
  },
};

const genData = (bodyIndicators: BodyIndicator[]) => ({
  labels: bodyIndicators.map((item) => item.title),
  datasets: [
    {
      data: bodyIndicators.map((item) => item.weight),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
      yAxisID: "y",
    },
    {
      data: bodyIndicators.map((item) => item.fat),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
      yAxisID: "y1",
      gridLines: {
        color: "green",
      },
    },
  ],
  backgroundColor: "red",
});

interface Props {
  bodyIndicators: BodyIndicator[];
}

const BodyIndicatorGraph = ({ bodyIndicators }: Props) => {
  return (
    <div className={styles.graph}>
      <Line
        key={Math.random()}
        options={options}
        data={genData(bodyIndicators)}
      />
    </div>
  );
};

export default React.memo(BodyIndicatorGraph);
