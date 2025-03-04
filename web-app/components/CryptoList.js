import CryptoCard from './CryptoCard'

export default function CryptoList({ coins, filter }) {
    // Filter coins based on the search term (coin id in this case)
    const filteredCoins = Object.entries(coins).filter(([id]) =>
        id.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredCoins.map(([id, coinData]) => (
                <CryptoCard
                    key={id}
                    coinId={id}
                    coinName={id.charAt(0).toUpperCase() + id.slice(1)}
                    priceData={coinData}
                />
            ))}
        </div>
    )
}