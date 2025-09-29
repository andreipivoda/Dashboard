import React from 'react'
import ComplexCard from './ComplexCard'
import MyGauge from './MyGauge'
function Mid() {
  return (
    <div className='border rounded-2xl  border-gray-400'>

      <div className='text-2xl text-center'>HOFER Compressors</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>

      <div className="flex flex-col justify-around bg--300 h-[86.5vh]">
        <ComplexCard />
        <ComplexCard />
      </div>
    </div>
  )
}

export default Mid