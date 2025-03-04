export default function RefreshButton({ onClick }) {
    return (
        <button
            className="p-2 bg-green-500 text-white rounded mt-4"
            onClick={onClick}
        >
            Refresh Prices
        </button>
    )
}