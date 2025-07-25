import "./App.css";

import React, { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";


function App() {
  const [operador, setOperator] = useState(null);
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");
  const [bgColor, setBgColor] = useState("#1e1e1e");

  const handleNumbers = (e) => {
    const valor = e.target.innerText;
    if (valor1.length > 10 || valor2.length > 20) {
      setValor1("");
      setValor2("");
      setOperator(null);
      return alert("Número muito grande!");
    }
    if (operador) {
      setValor2((prev) => prev + valor);
    } else {
      setValor1((prev) => prev + valor);
    }
  };
  const handleOperators = (e) => {
    const operadorSelecionado = e.target.innerText;
    if (valor2 !== "" && operadorSelecionado === "." && !valor2.includes(".")) {
      setValor2((prev) => prev + operadorSelecionado);
      return;
    }
    if (operadorSelecionado === "." && !valor1.includes(".")) {
      setValor1((prev) => prev + operadorSelecionado);
    } else if (["+", "-", "*", "/", "%"].includes(operadorSelecionado)) {
      setOperator(operadorSelecionado);
    }
  };
  const handleResult = () => {
    if (valor1 && valor2 && operador) {
      let resultado;
      const num1 = parseFloat(valor1);
      const num2 = parseFloat(valor2);
      switch (operador) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num1 / num2;
          break;
        case "%":
          resultado = (num1 * num2) / 100;
          break;
      }
      setResultado(resultado);
      setValor1("");
      setValor2("");
      setOperator(null);
    }
  };

  const changeBgColor = () => {
    const newColor = bgColor === "#1e1e1e" ? "#a7af7c" : "#1e1e1e";
    setBgColor(newColor);
  };

  const reset = () => {
    setValor1("");
    setValor2("");
    setOperator(null);
    setResultado("");
  };

  return (
    <div className="flex flex-col align-center justify-center w-[400px] mx-auto mt-6 bg-[#2c2c2c] text-white p-4 rounded-lg shadow-lg">
      <Display
        bgColor={bgColor}
        resultado={resultado}
        valor1={valor1}
        valor2={valor2}
        operador={operador}
      />
      <Button
        handleNumbers={handleNumbers}
        handleOperators={handleOperators}
        handleResult={handleResult}
        reset={reset}
        changeBgColor={changeBgColor}
      />
    </div>
  );
}

export default App;
