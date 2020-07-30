import React from 'react'
import './item.css'

export function Item(props) {
  return (
    <div class="item">
      <div class="texto">{props.texto}</div>
      <div class="imagem">
        <img src={props.imagem}></img>
      </div>
    </div>
  )
}
