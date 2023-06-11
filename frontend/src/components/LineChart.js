import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {

    return <Line data={chartData} />;
}

export default LineChart;

// import React from "react";
// import { Line } from "react-chartjs-2";

// function LineChart({ chartData }) {
//     const modifiedData = {
//         labels: chartData.labels,
//         datasets: [
//             {
//                 label: "Number of Donors",
//                 data: chartData.datasets[0].data.map((data) => data.Donor),
//                 backgroundColor: "rgba(255,99,132,1)",
//                 borderColor: "black",
//                 borderWidth: 2,
//             },
//         ],
//     };

//     return <Line data={modifiedData} />;
// }

// export default LineChart;
