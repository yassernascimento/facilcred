import React from 'react'
import { Differential, TopoHome, simulator } from '../components'

import './reset.css'
import './index.css'

export default function Home() {
  return (
    <div class="home">
      <TopoHome />
      <Simulator />
      <Differential />
    </div>
  )
}
