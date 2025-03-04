export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            className="p-2 border rounded w-full mb-4"
            placeholder="Search cryptocurrencies..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}