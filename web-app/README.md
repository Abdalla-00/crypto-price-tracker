# Crypto Price Tracker Web App

This Next.js application displays live cryptocurrency prices using the CoinGecko API. It features:
- Live price updates (auto-refresh every minute)
- A search bar to filter cryptocurrencies
- A manual refresh button
- Historical price charts (for the past 7 days)
- Dark mode toggle

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abdalla-00/crypto-price-tracker.git

2. **Navigate to the web-app folder:**
    ```bash
    cd crypto-price-tracker/web-app

3. **Install dependencies:**
    ```bash
    npm install

4. **Run the development server:**
    ```bash
    npm run dev

5. **Open your browser at http://localhost:3000.**

Notes
- The app uses the public CoinGecko API – no API keys are required.
- Data is fetched and cached using React Query.
- Dark mode is managed with next-themes and styled using Tailwind CSS.