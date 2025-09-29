import React from 'react'

import Left from '../Left'
import Mid from '../Mid'
import Right from '../Right'

function HightPressureNetwork() {
  return (
    <div className='border rounded-2xl border-gray-400'>
      <div className='text-center text-2xl py-2'>High Pressure Network</div>
      <div className='flex gap-4'>
        <div className='w-[40%]'>
          <Left />
        </div>
        <div className='w-[30%]'>
          <Mid />
        </div>
        <div className='w-[30%]'>
          <Right />
        </div>
      </div>
    </div>

  )
}

export default HightPressureNetwork