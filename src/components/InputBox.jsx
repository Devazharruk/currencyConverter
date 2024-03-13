import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "pkr",
  amountDisable = false,
  currencyDisable = false,
}) {
  // Generate unique IDs for input elements
  const amountInputId = useId();
  const currencyInputId = useId();
  return (
    <div className="inputBox p-4 p-lg-5 m-auto bg-white rounded-3  d-flex justify-content-between flex-column flex-lg-row ">
      <div className="">
        <label className="pb-4 fs-6 fw-bold " htmlFor={amountInputId}>
          {label}
        </label>
        <input
          className="form-control"
          id={amountInputId}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
        />
      </div>
      <div>
        <label htmlFor={currencyInputId} className="pb-4 fs-6 fw-bold ">
          Currency Type
        </label>
        <select
          id={currencyInputId}
          disabled={currencyDisable}
          className="form-select c-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
