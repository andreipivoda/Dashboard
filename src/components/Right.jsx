import React from 'react'
import MyGauge from './MyGauge'
import ComplexCard from './ComplexCard'

function Right() {
  return (
    <div className=''>
      <div className='text-2xl text-center'>Maximator Boosters</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>
      <div className="grid grid-cols-1 gap-4 mx-4">
        <ComplexCard title={'Booster 1(ACH)'}/>
        <ComplexCard title={'Booster 2(ACH)'}/>
        <ComplexCard title={'MAXITEC 3(ASH/APH)'}/>
      </div>
    </div>
  )
}

export default Right