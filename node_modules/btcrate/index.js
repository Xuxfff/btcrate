const axios = require('axios');

async function getBitcoinRates() {
    try {
        const response = await axios.get('http://api.coindesk.com/v1/bpi/currentprice.json');
        const bitcoinData = response.data;
        const rates = {
            USD: bitcoinData.bpi.USD.rate_float,
            GBP: bitcoinData.bpi.GBP.rate_float,
            EUR: bitcoinData.bpi.EUR.rate_float
        };
        return rates;
    } catch (error) {
        console.error('Error fetching Bitcoin rates:', error);
        throw error;
    }
}

module.exports = {
    getBitcoinRates
};
