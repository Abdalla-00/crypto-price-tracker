---
id: api
title: API Integration Details
---

## API Integration

The application uses the CoinGecko API to fetch live cryptocurrency data. Endpoints used include:

- **Current Prices:**  
  `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana&vs_currencies=usd&include_24hr_change=true`

- **Historical Data:**  
  `https://api.coingecko.com/api/v3/coins/{coin_id}/market_chart?vs_currency=usd&days=7`

Data is fetched on the client side and cached using React Query.
