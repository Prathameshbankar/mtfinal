

import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, registerables } from 'chart.js';
import { X } from "lucide-react";

Chart.register(...registerables);

export default function PositionGraph({ spriteId }) {
    // const sprite = useSelector((state) =>
    //     state.sprites.sprites.find((sprite) => sprite.id === spriteId)
    // );

    // if (!sprite || sprite.positions.length < 2) {
    //     return null; 
    // }

    const sprite = {
        positions: [
            {
                x: 0,
                y: 0
            }, 
            {
                x: 30   ,
                y: 50
            }, 
            {
                x: 50,
                y: 20
            }, 
        ]
    }

    const data = {
        labels: sprite.positions.map((_, index) => index),
        datasets: [
            {
                label: "X Position",
                data: sprite.positions.map(pos => pos.x),
                fill: false,
                backgroundColor: "rgba(18, 227, 39)",
                borderColor: "rgba(18, 227, 39)",
            },
            {
                label: "Y Position",
                data: sprite.positions.map(pos => pos.y),
                fill: false,
                backgroundColor: "rgba(201, 36, 78)",
                borderColor: "rgba(201, 36, 78)",
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    };

    return <Line data={data} options={options} />;
}
