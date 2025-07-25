import "./Button.css";
import { FaSun } from "react-icons/fa";

export const Button = ( { handleNumbers, handleOperators, handleResult, reset, changeBgColor }) => {

  const botoesOps = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "+"];
  return (
    <div className="teclado-container space-y-4">
        <div className="flex justify-between mb-4">
          <button
            className=" hover:bg-[#6b6b6b] border border-[#4a4a4a] text-white rounded-sm p-2 w-17"
            onClick={reset}
          >
            C
          </button>
          <button
            className=" hover:bg-[#6b6b6b] border border-[#4a4a4a] text-white rounded-sm p-2 w-17"
            onClick={changeBgColor}
          >
            <FaSun className="mx-auto" />
          </button>
          <button
            className=" hover:bg-[#6b6b6b] border border-[#4a4a4a] text-white rounded-sm p-2 w-17"
            onClick={handleOperators}
          >
            %
          </button>
        </div>

        <div className="teclado grid grid-cols-4 gap-2">
          {botoesOps.map((botao, index) => (
            <button
              key={index}
              className="botao"
              onClick={isNaN(botao) ? handleOperators : handleNumbers}
            >
              {botao}
            </button>
          ))}
          <button
            className="rounded-sm bg-[#7c2b1d] hover:bg-[#814c48]"
            onClick={handleResult}
          >
            =
          </button>
        </div>
      </div>
  )
}
