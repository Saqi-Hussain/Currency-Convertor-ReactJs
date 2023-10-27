import React from "react";

function InputBox() {
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Amount here"
        className="h-16 mt-2 w-5/6 ml-2 px-5 rounded-2xl font-medium text-2xl shadow-2xl	"
      />
      <select
        className="h-10 w-20 mt-5 ml-3 px-2 font-bold rounded-xl text-xl shadow-2xl	"
        name=""
        id=""
        value="usd"
      >
        <option>inr</option>
      </select>
    </div>
  );
}

export default InputBox;
