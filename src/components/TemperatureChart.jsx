import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
);

const options = {
    plugins: {
        title: { display: false },
        legend: { display: false },
        tooltips: { enabled: false }
    },
    scales: {
        x: { display: false },
        y: { display: false }
    },
    elements: {
        point: { radius: 8 }
    },
    responsive: true,
    maintainAspectRatio: true,
};

const TemperatureChart = ({ data }) => {

    const [lineData, setLineData] = useState({
        labels: [],
        datasets: [
            {
                fill: true,
                label: 'Temperature',
                data: [],
                borderColor: 'rgba (31, 58, 138, 1)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    });

    useEffect(() => {
        const labels = data?.futur?.list?.map((item) => item.dt_txt) || [];
        const temperatures= data?.futur?.list?.map((item) => item.main.temp) || [];

        labels.unshift("Now");
        temperatures.unshift(data?.now?.main?.temp);
        setLineData({
            ...lineData,
            labels,
            datasets: [
                {
                    ...lineData.datasets[0],
                    data: temperatures
                }
            ]
        });
    }, [data]);

    return (
        <div className="temperature-chart container bg-slate-50 rounded-lg drop-shadow">
            <p className="text font-semibold">Temperature</p>
            <Line data={lineData} options={options} />
        </div>
    )
}

export default TemperatureChart;