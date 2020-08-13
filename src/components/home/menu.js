import React from 'react'
import './menu.css'

export function Menu(props) {
  return (
    <div class="menu_principal">
      <nav class="nav01">
        <div class="logo">
          <img src="./logo.png"></img>
        </div>

        <div id="btn_menu">
          <i class="">X</i>
        </div>
      </nav>
      <nav class="menu_links" id="menu_links">
        <div>
          <a href="">Menu01</a>
        </div>
        <div>
          <a href="">Menu02</a>
        </div>
        <div>
          <a href="">Menu03</a>
        </div>
        <div>
          <a href="">Menu04</a>
        </div>
      </nav>
    </div>
  )
}
