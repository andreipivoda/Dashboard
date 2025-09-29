import React from 'react'
import MyGauge from './MyGauge'
import MyTemp from './MyTemp'
import CompressedAir from './CompressedAir'

function TemperatureHumidity() {
  return (
    <div className='border rounded-2xl border-gray-400'>
      <div className='text-center'>Temperature & Humidity</div>
      <div className="flex-7 sm:flex-[7] shadow-blue-950 p-2 rounded content-evenly border-gray-400">
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'><MyGauge unit={"°C"} /><MyTemp /></div>
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'><MyGauge unit={"°C"} /><MyTemp /></div>
        <div className='flex justify-evenly items-center border border-gray-400 my-1 rounded-2xl'><MyGauge unit={"°C"} /><MyTemp /></div>
      </div>
      <CompressedAir />
    </div>
  )
}

export default TemperatureHumidity