import React from 'react'
import SimpleCard from './SimpleCard'

function CompressedAir() {
  return (
    <div>
    <div className='text-center'>Compressed AIR</div>
    <div className="flex-3 sm:flex-[3] p-4 rounded content-around space-y-3">

    <SimpleCard title={'Uscator 1'}/>
    <SimpleCard title={'Uscator 2'}/>
    </div>
    </div>

  )
}

export default CompressedAir