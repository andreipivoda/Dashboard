import React from 'react'
import Burton from './Burton'
import Maximator from './Maximator'
import Hofer from './Hofer'
import Boosters from './Boosters'

function HightPressureNetwork() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div>
        <Burton />
        <Maximator />
      </div>
      <div><Hofer/></div>
      <div><Boosters/></div>
    </div>
  )
}

export default HightPressureNetwork