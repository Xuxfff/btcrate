const { getBitcoinRates } = require('./index');

async function test() {
    try {
        const rates = await getBitcoinRates();
        console.log('Bitcoin Rates:', rates);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

test();
