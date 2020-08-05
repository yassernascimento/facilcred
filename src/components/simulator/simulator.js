import React, { useState } from 'react'

import { Header } from './header/header'
import { Table } from './table/table'

const defaultNumberFormatProps = {
  prefix: 'R$ ',
  thousandSeparator: '.',
  decimalSeparator: ',',
  allowNegative: false,
  decimalScale: 2,
  fixedDecimalScale: true,
  isNumericString: true,
}

const commonProps = { defaultNumberFormatProps }

export function Simulator() {
  const [input, setInput] = useState(1000)

  return (
    <div>
      <Header input={input} setInput={setInput} {...commonProps} />
      <Table input={input} {...commonProps} />
      <button>{`Veja Mais >`}</button>
    </div>
  )
}
