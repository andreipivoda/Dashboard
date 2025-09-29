import React from 'react'
import MyGauge from './MyGauge'
import ComplexCard from './ComplexCard'

function Maximator() {
  return (
    <div className='mx-4'>

      <div className='text-2xl text-center'>Maximator Boosters</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>

      <div className="grid grid-cols-2 gap-4">
        <ComplexCard title={'Booster 4(ACH)'}/>
        <ComplexCard title={'Booster 5(ACH)'}/>
      </div>
    </div>
  )
}

export default Maximator