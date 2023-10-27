import { useState } from "react";
import "./App.css";
import UseCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [isDisable, setIsDisable] = useState("false");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  let swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex" style={{ backgroundColor: "black" }}>
      <div className="fixed flex left-2 mt-60 h-3/6 w-3/6 pt-14 text-start pl-5 align-middle justify-center  opacity-90 rounded-2xl text-white font-extrabold text-9xl">
        Currency Converter with ReactJs
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="fixed h-96 w-1/2  right-10 top-1/3  flex flex-col rounded-2xl justify-center bg-blue-800 shadow-2xl shadow-black">
          <InputBox
            Amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              console.log(currency);
              setFrom(currency);
            }}
            onAmountChange={(amount) => {
              console.log(amount);
              setAmount(amount);
            }}
            selectCurrency={from}
          />
          <button
            className=" bg-blue-600 text-3xl w-32 z-10 -mt-4 ml-80 p-5 rounded-xl text-white font-bold shadow-2xl	"
            onClick={() => {
              console.log(amount);
              console.log(convertedAmount);
              swap();
            }}
          >
            Swap
          </button>
          <div className="flex h-20 text-lg font-medium -mt-4 ">
            <InputBox
              isDisable
              className="bg-white"
              Amount={convertedAmount}
              selectCurrency={to}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <button className="fixed right-32 font-medium text-center text-2xl bg-[#5B5BFF] p-5 text-white rounded-lg cursor-pointer shadow-xl shadow-black">
            CONVERT <br /> <br /> {from.toUpperCase()} <br /> to <br />
            {to.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
