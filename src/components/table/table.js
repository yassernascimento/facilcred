import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useCountUp } from 'react-countup'

const defaultNumberFormatProps = {
  prefix: 'R$ ',
  thousandSeparator: '.',
  decimalSeparator: ',',
  allowNegative: false,
  decimalScale: 2,
  fixedDecimalScale: true,
  isNumericString: true,
}

const splits = {
  '1': parseFloat('0.002'),
  '2': parseFloat('0.05'),
  '6': parseFloat('0.1'),
  '12': parseFloat('0.18'),
  '24': parseFloat('0.22'),
}

function useValue() {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 0,
    delay: 0.5,
    duration: 1,
  })

  return { value: countUp, updateValue: update }
}

export function Table() {
  const [input, setInput] = useState(1000)
  const values = {
    '1': useValue(),
    '2': useValue(),
    '6': useValue(),
    '12': useValue(),
    '24': useValue(),
  }

  useEffect(() => {
    const valuesUpdated = updateValues(input)
    Object.entries(valuesUpdated).map(([splitNumber, newValue]) =>
      values[splitNumber].updateValue(newValue)
    )
  }, [input])

  function updateValues(base) {
    // react-number-format doesn't allow type number
    const baseNumber = Number(base)
    return Object.entries(splits).reduce(
      (acc, [splitNumber, percentage]) => ({
        ...acc,
        [splitNumber]: baseNumber * percentage + baseNumber,
      }),
      {}
    )
  }

  function handleChange(event) {
    setInput(event.value)
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
          value={input}
        />
      </div>
      <table>
        <tbody>
          {Object.keys(splits).map(function createRow(splitNumber) {
            return (
              <tr key={splitNumber}>
                <td>{`${splitNumber}x`}</td>
                <td>
                  <NumberFormat
                    {...defaultNumberFormatProps}
                    displayType={'text'}
                    value={values[splitNumber].value}
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
