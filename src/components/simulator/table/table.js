import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useCountUp } from 'react-countup'

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

  return { value: countUp, setValue: update }
}

export function Table(props) {
  const { input, defaultNumberFormatProps } = props
  const values = {
    '1': useValue(),
    '2': useValue(),
    '6': useValue(),
    '12': useValue(),
    '24': useValue(),
  }

  function updateValues(base) {
    function calcNewValue(acc, [splitNumber, percentage]) {
      return { ...acc, [splitNumber]: base * percentage + base }
    }

    return Object.entries(splits).reduce(calcNewValue, {})
  }

  useEffect(
    function callback() {
      function updateSplitValue([splitNumber, newValue]) {
        values[splitNumber].setValue(newValue)
      }

      const valuesUpdated = updateValues(input)
      Object.entries(valuesUpdated).map(updateSplitValue)
    },
    [input]
  )

  function createRow(splitNumber) {
    const { value } = values[splitNumber]
    return (
      <tr key={splitNumber}>
        <td>{`${splitNumber}x`}</td>
        <td>
          <NumberFormat
            {...defaultNumberFormatProps}
            displayType={'text'}
            value={value}
          />
        </td>
        <td>
          <button>{`>`}</button>
        </td>
      </tr>
    )
  }

  return (
    <table>
      <tbody>{Object.keys(splits).map(createRow)}</tbody>
    </table>
  )
}
