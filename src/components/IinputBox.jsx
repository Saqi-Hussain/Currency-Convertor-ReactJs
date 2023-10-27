import React from "react";
import { useId } from "react";

function InputBox({
  label,
  isDisable,
  className = "",
  placeholder,
  Amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  const amountInputId = useId();

  return (
    <div className="flex ml-16 h-20 w-2/3  ">
      <label htmlFor={amountInputId}>{label}</label>
      <input
        id={amountInputId}
        type="number"
        placeholder={placeholder}
        className={`h-16 mt-2 w-5/6 ml-2 px-5 rounded-2xl font-medium text-2xl shadow-2xl ${className}`}
        disabled={isDisable}
        value={Amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <select
        className="h-10 w-20 mt-5 ml-3 px-2 font-bold rounded-xl text-xl shadow-2xl	"
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
