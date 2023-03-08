import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { CivLabelModel } from '../../../../../labels';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

export function PlaystyleRadar({ labels }: { labels: { label: CivLabelModel, occurences: number }[] }) {
    const labelsExceptBeginner = labels.filter((x) => x.label != "Beginner-friendly");
    const data = {
        labels: labelsExceptBeginner.map((label) => label.label), //allLabelsExceptBeginner.map((label) => label),
        datasets: [
            {
                label: '',
                data: labelsExceptBeginner.map((label) => label.occurences),
                backgroundColor: 'rgba(153, 66, 16, 0.6)',
                borderColor: '#6e2e08',
                borderWidth: 1,
            },
        ],
    };

    return <Radar data={data} options={{
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: "#cacaca",
                    font: {
                        size: 13,
                        family: "Alexandria-Regular"
                    }
                },
                ticks: {
                    display: false // Hides the labels in the middel (numbers)
                },
                angleLines: {
                    color: "rgba(204, 204, 204, .5)"
                },
                grid: {
                    color: "rgba(204, 204, 204, .5)"
                }
            },
        }
    }} />;
}