import React from 'react'

export const Display = ( { bgColor, resultado, valor1, valor2, operador }) => {
  return (
    <div
        className="text-2xl pr-4 text-right rounded-2xl mb-4 min-h-20 max-h-22 p-2"
        style={{
          backgroundColor: `${bgColor}`,
          color: bgColor === "#1e1e1e" ? "#ffffff" : "#000000",
        }}
      >
        <div className="resultado-final">{resultado}</div>
        {!resultado && (
          <>
            <div className="valor">{valor1 || 0}</div>
            <div className="operacao">
              {operador ? ` ${operador} ${valor2}` : ""}
            </div>
          </>
        )}
      </div>
  )
}
