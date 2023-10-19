import { FC, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { airQualityAPI } from "../api/authApis";

interface iCity {
  city?: string;
}

export const CharAt: FC<iCity> = ({ city }) => {
  const [state, setState] = useState<any>({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };


  const labels : any = [
    "CO2",
    "NO2",
    "O3",
    "SO2",
    "PM10",
    "Overall_AQI",
  ];
  const database = [
    state?.CO?.aqi,
    state?.NO2?.aqi,
    state?.O3?.aqi,
    state?.SO2?.aqi,
    state?.PM10?.aqi,
    state?.overall_aqi,
  ];
  const database2 = [
    state?.CO?.concentration,
    state?.NO2?.concentration,
    state?.O3?.concentration,
    state?.SO2?.concentration,
    state?.PM10?.concentration,
  ];
  // const database = [7, 2, 33, 0, 54, 21, 54];
  // const database2 = [667.57, 1.63, 39.34, 0.62, 17.59, 23.55];

  const data = {
    labels,
    datasets: [
      {
        label: "AQI",
        data: database,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Concentration",
        data: database2,
        backgroundColor: "rgba(101, 205, 247, 0.5)",
      },
    ],
  };

  airQualityAPI(city).then((res: any) => {
    setState(res);
  });

  console.log("state info", state);
  return <Bar options={options} data={data} />;
};
