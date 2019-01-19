import "isomorphic-unfetch";
import { ICurrencies } from "./types";
const OPENEX_URL = `https://openexchangerates.org/api/latest.json?app_id=${process.env.OPENEX_API_KEY}`;

async function getLatestRates(): Promise<ICurrencies> {
  const openExFetch = await fetch(OPENEX_URL);
  const apiResponse = await openExFetch.json();
  return {
    EUR: apiResponse.rates.EUR,
    GBP: apiResponse.rates.GBP,
    USD: 1,
  };
}

export { getLatestRates };
