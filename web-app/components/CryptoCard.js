import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

// Dynamically import ChartComponent (disable SSR)
const ChartComponent = dynamic(() => import('./ChartComponent'), { ssr: false })

export default function CryptoCard({ coinId, coinName, priceData }) {
    const [showChart, setShowChart] = useState(false)

    const { data: chartData, isLoading: chartLoading } = useQuery(
        ['history', coinId],
        async () => {
            const res = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
            )
            if (!res.ok) throw new Error('Failed to fetch historical data')
            const data = await res.json()
            return data.prices
        },
        { enabled: showChart } // Only fetch when chart is shown
    )

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">{coinName}</h2>
            <p>Price: ${priceData.usd}</p>
            <p>24h Change: {priceData.usd_24h_change?.toFixed(2)}%</p>
            <button
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => setShowChart(!showChart)}
            >
                {showChart ? 'Hide Chart' : 'Show Chart'}
            </button>
            {showChart && (
                <div className="mt-4">
                    {chartLoading ? (
                        <p>Loading chart...</p>
                    ) : (
                        chartData && <ChartComponent data={chartData} />
                    )}
                </div>
            )}
        </div>
    )
}