import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function ChartComponent({ data }) {
    const chartData = {
        labels: data.map(item => new Date(item[0]).toLocaleDateString()),
        datasets: [
            {
                label: 'Price (USD)',
                data: data.map(item => item[1]),
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }
        ]
    }

    return <Line data={chartData} />
}