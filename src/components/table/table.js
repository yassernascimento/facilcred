import React, { useState } from 'react'
import NumberFormat from 'react-number-format'

const multipliers = [
  { splits: 1, percentage: 0.02 },
  { splits: 2, percentage: 0.05 },
  { splits: 6, percentage: 0.1 },
  { splits: 12, percentage: 0.18 },
  { splits: 24, percentage: 0.22 },
]

export function Table(props) {
  const [base, setBase] = useState(1000)
  const defaultNumberFormatProps = {
    prefix: 'R$ ',
    thousandSeparator: '.',
    decimalSeparator: ',',
    allowNegative: false,
    decimalScale: 2,
    fixedDecimalScale: true,
    isNumericString: true,
  }

  function handleChange(event) {
    setBase(event.value)
  }

  function calcValue(percentage) {
    // react-number-format doesn't allow type number
    const baseNumber = Number(base)
    return baseNumber * percentage + baseNumber
  }

  return (
    <div>
      <div>
        <h1>
          Simulador <span>Fácil Cred</span>
        </h1>
        <NumberFormat
          {...defaultNumberFormatProps}
          onValueChange={handleChange}
          value={base}
        />
      </div>
      <table>
        <tbody>
          {multipliers.map(function createRow(m) {
            return (
              <tr key={m.splits}>
                <td>{`${m.splits}x`}</td>
                <td>
                  <NumberFormat
                    {...defaultNumberFormatProps}
                    displayType={'text'}
                    value={calcValue(m.percentage)}
                  />
                </td>
                <td>
                  <button>{`>`}</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button>{`Veja Mais >`}</button>
    </div>
  )
}
