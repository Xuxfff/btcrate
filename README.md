btcrate is a simple Node.js package that allows you to fetch the  current exchange rates for Bitcoin against USD, GBP, and EUR from the  CoinDesk API. It provides an easy-to-use interface for accessing this  data programmatically.

```
const { getBitcoinRates } = require('btcrate');

async function fetchRates() {
    try {
        const rates = await getBitcoinRates();
        console.log('Bitcoin Rates:', rates);
    } catch (error) {
        console.error('Failed to fetch Bitcoin rates:', error);
    }
}

fetchRates();

```

