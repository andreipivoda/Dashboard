import React from 'react'
import SimpleCard from './SimpleCard'

function CompressedAir() {
  return (
    <div>
      <div className='text-center text-2xl'>Compressed AIR</div>
      <div className="flex-3 sm:flex-[3] p-4 rounded content-around space-y-3">

        <SimpleCard title={'Uscator 1'} date={'2025-05-01  22:33:44'}/>
        <SimpleCard title={'Uscator 2'} date={'2025-05-01  22:33:44'}/>
      </div>
    </div>

  )
}

export default CompressedAir