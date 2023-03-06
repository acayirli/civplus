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
    Legend
);

export function PlaystyleRadar({ labels }: { labels: { label: CivLabelModel, occurences: number }[] }) {
    const data = {
        labels: labels.map((label) => label.label),
        datasets: [
            {
                label: '',
                data: labels.map((label) => label.occurences),
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderColor: '#ccc',
                borderWidth: 1,
            },
        ],
    };

    return <Radar data={data} />;
}