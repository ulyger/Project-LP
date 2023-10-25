import BTClunoMYR from './lib/luno.js'
import BTCbinanceUSD from './lib/binance.js'
import exchangeRate from './lib/exchange.js'


async function calculatePrices() {
  try {
    let BTCluno2MYR = await BTClunoMYR();
    let convRate = await exchangeRate();
    let BTCbinance2USD = await BTCbinanceUSD();
  

    let BTClunoUSD = BTCluno2MYR / convRate;
    let priceDiff = (BTClunoUSD - BTCbinance2USD);
    let percentDiff = ((priceDiff / BTClunoUSD) * 100).toFixed(2);

    console.log("BTCMYR price on Luno:", "MYR", BTCluno2MYR);
    console.log("USDMYR:", convRate);
    console.log("BTCUSD price on Luno:", "USD", BTClunoUSD);
    console.log("BTCUSD price on Binance:", "USD", BTCbinance2USD);
    console.log("Price difference", "USD", priceDiff);
    console.log("Luno premium:", percentDiff + "%");
  } catch (error) {
    console.error(error);
  }
}

calculatePrices()