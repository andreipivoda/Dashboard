import React, { useContext, useEffect, useState } from 'react'
import MyGauge from './MyGauge'
import ComplexCard from './ComplexCard'
import { DataContext } from './DataContext';

function Maximator() {
    const data = useContext(DataContext);
    const [max4, setMax4] = useState({ name: 'loading' });
    const [max5, setMax5] = useState({ name: 'loading' });
  
    useEffect(() => {
     if (Array.isArray(data)) {
        const max4 = data.find(item => item.name === "Maximator 4 - ACH");
        const max5 = data.find(item => item.name === "Maximator 5 - ACH");
        max4 && setMax4(max4);
        max4 && setMax5(max5);
      }
    }, [data]); 

  return (
    <div className='mx-4'>
      <div className='text-2xl text-center'>Maximator Boosters</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>

      <div className="grid grid-cols-2 gap-4">
        <ComplexCard title={max4.name} date={max4.last_update} value={max4.measurement}/>
        <ComplexCard title={max5.name} date={max5.last_update} value={max5.measurement}/>
      </div>
    </div>
  )
}

export default Maximator