import React from 'react'

import Left from './Left'
import Mid from './Mid'
import Right from './Right'

function HightPressureNetwork() {
  return (
    <div className='grid grid-cols-3 gap-4 h-screen'>
      <Left />
      <Mid />
      <Right />
    </div>
  )
}

export default HightPressureNetwork