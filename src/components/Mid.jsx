import React, { useContext, useEffect, useState } from 'react'
import ComplexCard from './ComplexCard'
import MyGauge from './MyGauge'
import { DataContext } from './DataContext';

function Mid() {

  const data = useContext(DataContext);
  const [compresor1, setCompresor1] = useState({ name: 'loading...', last_update: 'loading...' });
  const [compresor2, setCompresor2] = useState({ name: 'loading...', last_update: 'loading...' });

  useEffect(() => {
    if (data) {
      const c2 = data.find(item => item.name === "Compresor 1 - ACH");
      const c3 = data.find(item => item.name === "Compresor 2 - ACH");

      c2 && setCompresor1(c2);
      c3 && setCompresor2(c3);
    }
  }, [data]);

  return (

    <div className='border rounded-2xl  border-gray-400'>

      <div className='text-2xl text-center'>HOFER Compressors</div>
      <div className='text-2xl text-center pb-4'>Output - 950 BAR</div>

      <div className="flex flex-col justify-around  h-[85vh] mx-4">
        <ComplexCard title={compresor1.name} date={compresor1.last_update} isOnline={true} />
        <ComplexCard title={compresor2.name} date={compresor2.last_update} isOnline={false} />
      </div>
    </div>
  )
}

export default Mid