import React from 'react'
import styled from 'styled-components'

export const Button = props => {
  const Button = styled.button`
    padding: 10px;
    text-transform: uppercase;
  `
  const { text } = props
  return <Button>{text}</Button>
}
