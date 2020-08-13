import React from 'react'
import { Menu } from './menu'
import './topohome.css'

export function TopoHome(props) {
  return (
    <div>
      <div class="topo">
        <Menu />
        <div class="carroTopo">
          <img src="./topocarro.png"></img>
        </div>
        <div class="pessoasTopo">
          <img src="./pessoastopo.png"></img>
        </div>
      </div>
    </div>
  )
}
