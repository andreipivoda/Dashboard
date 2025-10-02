import React, { useContext, useEffect, useState } from 'react'
import MyGauge from './MyGauge'
import ComplexCard from './ComplexCard'
import { DataContext } from './DataContext';

function Right() {

  const data = useContext(DataContext);
  const [max1, setMax1] = useState({ name: 'loading...', last_update: 'loading...' });
  const [max2, setMax2] = useState({ name: 'loading...', last_update: 'loading...' });
  const [max3, setMax3] = useState({ name: 'loading...', last_update: 'loading...' });

  useEffect(() => {
    if (Array.isArray(data)) {
      const max1 = data.find(item => item.name === "Booster 1 - ACH");
      const max2 = data.find(item => item.name === "Booster 2 - ACH");
      const max3 = data.find(item => item.name === "MAXITEC 3 - (ASH/APH)");

      max1 && setMax1(max1);
      max2 && setMax2(max2);
      max3 && setMax3(max3);
    }
  }, [data]);


  return (
    <div className=''>
      <div className='text-2xl text-center'>Maximator Boosters</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>
      <div className="grid grid-cols-1 gap-4 mx-4">
        <ComplexCard title={max1.name}  date={max1.last_update} value={max1.measurement}/>
        <ComplexCard title={max2.name}  date={max2.last_update} value={max2.measurement}/>
        <ComplexCard title={max3.name}  date={max3.last_update} value={max3.measurement}/>
      </div>
    </div>
  )
}

export default Right