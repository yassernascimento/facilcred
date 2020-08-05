import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

const input$ = new Subject()

export function Header(props) {
  const { input, setInput, defaultNumberFormatProps } = props

  useEffect(function callback() {
    input$
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe(function callback(newInput) {
        setInput(newInput)
      })
  }, [])

  function handleChange(event) {
    input$.next(event.floatValue)
  }

  return (
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
  )
}
