import { useState } from 'react'

import './App.css'
import HightPressureNetwork from './components/HightPressureNetwork'
import TemperatureHumidity from './components/TemperatureHumidity'
import CompressedAir from './components/CompressedAir'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-10 gap-4">

      <div className="col-span-8">
        <HightPressureNetwork />
      </div>
      <div className='col-span-2'>
        <TemperatureHumidity />
      </div>
    </div>
  )
}

export default App
