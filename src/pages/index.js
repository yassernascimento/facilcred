import React from 'react'
import { Differential, TopoHome } from '../components'

import './reset.css'
import './index.css'

export default function Home() {
  return (
    <div class="home">
      <TopoHome />
      <Differential />
    </div>
  )
}
