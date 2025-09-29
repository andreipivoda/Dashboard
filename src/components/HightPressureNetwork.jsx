import React from 'react'

import Left from './Left'
import Mid from './Mid'
import Right from './Right'

function HightPressureNetwork() {
  return (
    <div className='min-h-screen  border rounded-2xl  border-gray-400'>
      <div className='text-center text-2xl'>High pressure Network</div>
      <div className='grid grid-cols-9 gap-2 '>
        <div className='col-span-5'>
          <Left />
        </div>
        <div className='col-span-2'>
          <Mid />
        </div>
        <div className='col-span-2'>
          <Right />
        </div>
      </div>
    </div>

  )
}

export default HightPressureNetwork