import React from 'react'
import SimpleCard from './SimpleCard';

function Burton() {

  const compressors = [
    { title: 'Compressor 2 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 3 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 4 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 5 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },

  ];
  return (
    <div className='mx-4'>
      <div className='text-2xl text-center'>Burton Corblin Compressors</div>
      <div className='text-2xl text-center pb-4'>Output - 550 BAR</div>

      <div className="grid grid-cols-2 gap-4">
        <SimpleCard title={'Compressor 2(ACH)'}/>
        <SimpleCard title={'Compressor 3(ACH)'}/>
        <SimpleCard title={'Compressor 4(ACH)'}/>
        <SimpleCard title={'Compressor 5(ACH)'}/>
      </div>
    </div>
  )
}

export default Burton