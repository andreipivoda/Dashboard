import React, { useContext, useState, useEffect } from 'react'
import SimpleCard from './SimpleCard';
import { DataContext } from './DataContext';

function Burton() {
  const data = useContext(DataContext);
  const [compresor2, setCompresor2] = useState({ name: 'loading' });
  const [compresor3, setCompresor3] = useState({ name: 'loading' });
  const [compresor4, setCompresor4] = useState({ name: 'loading' });
  const [compresor5, setCompresor5] = useState({ name: 'loading' });

  useEffect(() => {
    if (Array.isArray(data)) {
      const c2 = data.find(item => item.name === "Compresor 2 - ACH");
      const c3 = data.find(item => item.name === "Compresor 3 - ACH");
      const c4 = data.find(item => item.name === "Compresor 4 - ACH");
      const c5 = data.find(item => item.name === "Compresor 5 - ACH");
      c2 && setCompresor2(c2);
      c3 && setCompresor3(c3);
      c4 && setCompresor4(c4);
      c5 && setCompresor5(c5);
    }
  }, [data]); 


  return (
    <div className='mx-4'>
      <div className='text-2xl text-center'>Burton Corblin Compressors</div>
      <div className='text-2xl text-center pb-4'>Output - 550 BAR</div>

      <div className="grid grid-cols-2 gap-4">
        <SimpleCard title={compresor2.name} date={compresor2.last_update} isOnline={compresor2.offline}/>  
        <SimpleCard title={compresor3.name} date={compresor3.last_update} isOnline={compresor3.offline}/>
        <SimpleCard title={compresor4.name} date={compresor4.last_update} isOnline={compresor4.offline}/>
        <SimpleCard title={compresor5.name} date={compresor5.last_update} isOnline={compresor5.offline}/>
      </div>
    </div>
  )
}

export default Burton

//title, date, isOnline

// const compressors = [
//   { title: 'Compressor 2 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
//   { title: 'Compressor 3 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
//   { title: 'Compressor 4 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
//   { title: 'Compressor 5 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },

// ];