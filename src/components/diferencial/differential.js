import React from 'react'
import './diferencial.css'
import { Item } from './item'

export function Differential(props) {
  return (
    <div class="geralDiferencial">
      <div class="titulo">PORQUE PEDIR EMPRÉSTADO A FÁCILCRED?</div>
      <div class="elementos">
        <div class="itens">
          <Item
            imagem="/diferencial01.png"
            texto="Rápido Pratico e Seguro"
          ></Item>
          <Item
            imagem="/diferencial02.png"
            texto="Parcelamos em até 24x"
          ></Item>
          <Item
            imagem="/diferencial03.png"
            texto="Menores Taixas da Região"
          ></Item>
          <Item
            imagem="/diferencial04.png"
            texto="Confiança e Credibilidade"
          ></Item>
        </div>

        <div class="linha"></div>
      </div>
    </div>
  )
}
