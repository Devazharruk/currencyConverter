import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData]=useState("usd")
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch currency data")
                }
                return res.json()
            })
            .then((res) => setData(res[currency]))
            .catch((error) => console.error(error));
    }, [currency]);
    return data;
}

export default useCurrencyInfo