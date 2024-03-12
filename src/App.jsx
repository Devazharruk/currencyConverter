import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  // State variables for amount, currency conversion, and currency options
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency information based on 'from' currency
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="currency-converter">
      <div className="app w-100 h-100 d-flex justify-content-center align-items-center ">
        <div className="appBox w-75 rounded-3 py-3">
          <form
            className="appForm"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currrency) => setFrom(currrency)}
            />
            <div className="text-center">
              <button
                onClick={swap}
                className="btn btn-primary swap px-4 text-uppercase "
              >
                Swap
              </button>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currrency) => setTo(currrency)}
            />
            <div className="text-center mt-2 ">
              <button className="btn btn-primary">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
