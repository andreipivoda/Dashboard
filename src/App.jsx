import { useState } from 'react'

import './App.css'
import HightPressureNetwork from './components/HightPressureNetwork'
import TemperatureHumidity from './components/TemperatureHumidity'
import CompressedAir from './components/CompressedAir'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-5 gap-0 max-w-lvw h-lvh">
        <div className="col-start-1 col-end-1 sm:col-start-1 sm:col-end-5 row-start-1 row-end-6">
          <HightPressureNetwork />
        </div>
        
        <div className="col-start-1 col-end-2 sm:col-start-5 sm:col-end-6 row-start-2 sm:row-start-1 row-end-6 flex flex-col  gap-4">
          <div className="flex-7 sm:flex-[7] bg-gray-100 p-4 rounded">
            <TemperatureHumidity />
          </div>
          
          <div className="flex-3 sm:flex-[3] bg-gray-200 p-4 rounded">
            <CompressedAir />
          </div>
        </div>

      </div>



    </>
  )
}

export default App
