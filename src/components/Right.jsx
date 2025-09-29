import React from 'react'
import MyGauge from './MyGauge'
import ComplexCard from './ComplexCard'

function Right() {
  return (
    <div className='max-h-screen'>
      <h2>HOFER Compressors</h2>
      <h3>Output - 950 BAR</h3>

      <div className="grid grid-cols-1 gap-4">
        <ComplexCard />
        <ComplexCard />
        <ComplexCard />
      </div>
    </div>
  )
}

export default Right