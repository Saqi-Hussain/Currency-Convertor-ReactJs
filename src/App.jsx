import { useState } from "react";
import "./App.css";
import UseCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  const useCurrency = UseCurrencyInfo('pkr');

  console.log(useCurrency); 

  return (
    <div className="flex">
      <div className="fixed flex left-2 mt-60 h-3/6 w-3/6 pt-14 text-start pl-5 align-middle justify-center  opacity-90 rounded-2xl text-white font-extrabold text-9xl">
        Currency Converter with ReactJs
      </div>

      <div className="fixed h-96 w-1/2  right-10 top-1/3  flex flex-col rounded-2xl justify-center bg-blue-800 shadow-2xl shadow-black">
        <div className="flex ml-16 h-20 w-2/3  ">
          
        </div>
        <button className=" bg-blue-600 text-3xl w-32 z-10 -mt-4 ml-80 p-5 rounded-xl text-white font-bold shadow-2xl	">
          Swap
        </button>
        <div className="flex ml-16 h-20 w-2/3 text-lg font-medium -mt-4 ">
          <input
            type="number"
            placeholder="Converted Currency"
            className="h-16 mt-2 w-5/6 ml-2 px-5 rounded-2xl font-medium text-2xl shadow-2xl bg-white	"
            disabled={true}
          />
          <select
            className="h-10 w-20 mt-5 ml-3 px-2 font-bold rounded-xl text-xl shadow-2xl	"
            name=""
            id=""
          >
            <option value="">inr</option>
            <option value="">pkr</option>
            <option value="">inr</option>
            <option value="">inr</option>
          </select>
        </div>
        <button className="fixed right-24 font-medium text-center text-5xl bg-black p-5 text-white rounded-lg cursor-pointer shadow-xl shadow-blue-700">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
