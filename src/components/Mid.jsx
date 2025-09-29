import React from 'react'
import ComplexCard from './ComplexCard'
import MyGauge from './MyGauge'
function Mid() {
  return (
    <div className='border rounded-2xl  border-gray-400'>

      <div className='text-2xl text-center'>HOFER Compressors</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>

      <div className="flex flex-col justify-around  h-[85vh] mx-4">
        <ComplexCard title={'Compresor 1(ACH)'} isOnline={true}/>
        <ComplexCard title={'Compresor 2(ACH)'} isOnline={false}/>
      </div>
    </div>
  )
}

export default Mid