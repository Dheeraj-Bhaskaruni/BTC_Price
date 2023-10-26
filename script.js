const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
const apiKey = 'CG-dmkw6Q5JtyRjDvWsjz4eDrmp';

async function fetchBitcoinPrice() {
    try {
        const headers = {
            'Authorization': `Bearer ${apiKey}`
        };
        const response = await fetch(apiUrl, { headers });
        const data = await response.json();
        const price = data.bitcoin.usd;
        document.getElementById('price').innerText = `$${price}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
}

fetchBitcoinPrice();  // Fetch the Bitcoin price on page load

// Set up a recurring task to fetch the new price every 30 minutes
setInterval(fetchBitcoinPrice, 1800000);
