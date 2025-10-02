import React, { useContext, useEffect, useState } from 'react'
import SimpleCard from './SimpleCard'
import { DataContext } from './DataContext';

function CompressedAir() {

  const data = useContext(DataContext);
  const [usc1, setUsc1] = useState({ name: 'loading...', last_update: 'loading...' });
  const [usc2, setUsc2] = useState({ name: 'loading...', last_update: 'loading...' });


  useEffect(() => {
    if (Array.isArray(data)) {
      const usc1 = data.find(item => item.name === "Uscator 1");
      const usc2 = data.find(item => item.name === "Uscator 2");

      usc1 && setUsc1(usc1);
      usc2 && setUsc2(usc2);

    }
  }, [data]);

  return (
    <div>
      <div className='text-center text-2xl'>Compressed AIR</div>
      <div className="flex-3 sm:flex-[3] p-4 rounded content-around space-y-3">
        <SimpleCard title={usc1.name} date={usc1.last_update} />
        <SimpleCard title={usc2.name} date={usc2.last_update} />
      </div>
    </div>

  )
}

export default CompressedAir