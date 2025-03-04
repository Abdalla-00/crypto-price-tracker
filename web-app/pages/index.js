import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTheme } from 'next-themes'
import SearchBar from '../components/SearchBar'
import CryptoList from '../components/CryptoList'
import RefreshButton from '../components/RefreshButton'

export default function Home() {
    const [filter, setFilter] = useState('')
    const { theme, setTheme } = useTheme()

    const { data, error, isLoading, refetch } = useQuery(
        ['cryptoPrices'],
        async () => {
            const res = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana&vs_currencies=usd&include_24hr_change=true'
            )
            if (!res.ok) throw new Error('Failed to fetch prices')
            return res.json()
        },
        {
            refetchInterval: 60000 // Auto-refresh every minute
        }
    )

    if (error) return <div className="p-4 text-red-500">Error loading data</div>

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Crypto Price Tracker
                </h1>
                <button
                    className="p-2 bg-yellow-500 text-white rounded"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    Toggle Dark Mode
                </button>
            </div>
            <SearchBar value={filter} onChange={setFilter} />
            {isLoading ? (
                <p className="text-gray-900 dark:text-gray-100">Loading...</p>
            ) : (
                <CryptoList coins={data} filter={filter} />
            )}
            <RefreshButton onClick={refetch} />
        </div>
    )
}
