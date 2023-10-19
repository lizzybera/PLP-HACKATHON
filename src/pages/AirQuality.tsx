import { Bar } from "react-chartjs-2";
import { airQualityAPI } from "../api/authApis";
import { useState } from "react";

// npm i react-chartjs-2 chart.js

const AirQuality = () => {
  const [info, setInfo] = useState();
  const [state, setState] = useState({});

  const getAirQuality = () => {
    airQualityAPI(info).then((res: any) => {
      setState(res);
    });
  };

  console.log(state);

  const Match = [state];

  const Match1 = Match.flat().map((props) => {
    return props?.assignedName;
  });
  console.log(Match1);

  const arr = Match1;
  const counts: any = {};

  const labels = Match1;
  // for(let i=0 ; i < arr.length ; i++){

  // }

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log("Objects", counts);

  let Keys1 = Object.values(counts);
  let Name1 = Object.keys(counts);
  console.log("Name", Name1);
  console.log("Values", Keys1);
  // const labels =  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Brown'];
  const data = {
    labels: Name1,
    datasets: [
      {
        label: "Most Done Task",
        data: Keys1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};
export default AirQuality;
