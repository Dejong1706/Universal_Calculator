"use client";
import { useState } from "react";

export default function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [display, setDisplay] = useState("0");

  const inputNum = (num: string) => {
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? num : prevDisplay + num
    );
  };

  const handleOperator = (oper: string) => {
    switch (oper) {
      case "C":
        reset();
        break;
      case "←":
        if (display.length === 1) {
          setDisplay("0");
        } else {
          setDisplay(display.slice(0, -1));
        }
        break;
      case "÷":
      case "×":
      case "-":
      case "+":
        handleMath(oper);
        break;
      case "=":
        result();
        break;
    }
  };

  const handleMath = (oper: string) => {
    if (display === "0") return;

    if (
      display.slice(-1) === "+" ||
      display.slice(-1) === "-" ||
      display.slice(-1) === "×" ||
      display.slice(-1) === "÷"
    ) {
      setDisplay((prev) => prev.slice(0, -1) + oper);
    } else {
      setDisplay((prev) => prev + oper);
    }
  };

  const reset = () => {
    setDisplay("0");
    setTotal(0);
  };

  const result = () => {
    let num = "";
    let sum = 0;
    let currentOperator = null;

    for (let i = 0; i <= display.length; i++) {
      if (
        display[i] !== "+" &&
        display[i] !== "-" &&
        display[i] !== "×" &&
        display[i] !== "÷" &&
        i !== display.length
      ) {
        num += display[i];
      } else {
        if (currentOperator === null) {
          sum = parseInt(num);
        } else {
          if (currentOperator === "+") {
            sum += parseInt(num);
          } else if (currentOperator === "-") {
            sum -= parseInt(num);
          } else if (currentOperator === "×") {
            sum *= parseInt(num);
          } else if (currentOperator === "÷") {
            sum /= parseInt(num);
          }
        }
        currentOperator = display[i];
        num = "";
      }
    }

    setTotal(sum);
    setDisplay(String(sum));
  };

  return (
    <div className="w-[25rem] h-full bg-[#4264e3] border border-white/30 rounded-lg p-8 shadow-lg">
      <section className="bg-white/75 border border-white/10 rounded-lg p-5 mb-4 text-right text-2xl shadow-lg">
        {display}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between">
          <button
            className="w-2/5 py-4 text-xl bg-white/90 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("C")}
          >
            C
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/90 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("←")}
          >
            &larr;
          </button>
          <button
            className="w-1/5 py-4 text-xl text-white bg-[#2e2f31] border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("÷")}
          >
            &divide;
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("7")}
          >
            7
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("8")}
          >
            8
          </button>
          <button
            className=" w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("9")}
          >
            9
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-[#F94C66] border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("×")}
          >
            &times;
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("4")}
          >
            4
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("5")}
          >
            5
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("6")}
          >
            6
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-[#FFE400] border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("1")}
          >
            1
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("2")}
          >
            2
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("3")}
          >
            3
          </button>
          <button
            className="w-1/5 py-4 text-xl bg-[#4bac2a] border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="w-[70%] py-4 text-xl bg-white/75 border border-white/10 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => inputNum("0")}
          >
            0
          </button>
          <button
            className="w-[20%] py-4 text-xl bg-pink-500 text-white border border-pink-500 rounded-lg shadow-md backdrop-blur-lg"
            onClick={() => handleOperator("=")}
          >
            =
          </button>
        </div>
      </section>
    </div>
  );
}
