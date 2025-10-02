import React, { useContext, useEffect, useState } from 'react'
import MyGauge from './MyGauge'
import MyHumidity from './MyHumidity'
import CompressedAir from './CompressedAir'
import { DataContext } from './DataContext';

function TemperatureHumidity() {

  const data = useContext(DataContext);
  const [temp1, setTemp1] = useState({ name: 'loading...', last_update: 'loading...' });
  const [temp2, setTemp2] = useState({ name: 'loading...', last_update: 'loading...' });
  const [temp3, setTemp3] = useState({ name: 'loading...', last_update: 'loading...' });
  const [humi1, setHumi1] = useState({ name: 'loading...', last_update: 'loading...' });
  const [humi2, setHumi2] = useState({ name: 'loading...', last_update: 'loading...' });
  const [humi3, setHumi3] = useState({ name: 'loading...', last_update: 'loading...' });

  useEffect(() => {
    if (data) {
      const temp1 = data.find(item => item.name === "Zona C1");
      const temp2 = data.find(item => item.name === "Zona GG2");
      const temp3 = data.find(item => item.name === "Zona MGC");
      const humi1 = data.find(item => item.name === "Humidity C1");
      const humi2 = data.find(item => item.name === "Humidity  GG2");
      const humi3 = data.find(item => item.name === "Humidity  MGC");

      temp1 && setTemp1(temp1);
      temp2 && setTemp2(temp2);
      temp3 && setTemp3(temp3);
      humi1 && setHumi1(humi1);
      humi2 && setHumi2(humi2);
      humi3 && setHumi3(humi3);
    }
  }, [data]);



  return (
    <div className='border rounded-2xl border-gray-400 h-[98vh] flex flex-col'>
      <div className='text-center text-2xl'>Temperature & Humidity</div>
      <div className="flex-7 sm:flex-[7] shadow-blue-950 p-2 rounded content-evenly border-gray-400">
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'>
          <MyGauge unit={"°C"} value={temp1.measurement} /><MyHumidity value={humi1.measurement} />
        </div>
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'>
          <MyGauge unit={"°C"} value={temp2.measurement} /><MyHumidity value={humi2.measurement} />
        </div>
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'>
          <MyGauge unit={"°C"} value={temp3.measurement} /><MyHumidity value={humi3.measurement} />
        </div>
      </div>
      <CompressedAir />
    </div>
  )
}

export default TemperatureHumidity