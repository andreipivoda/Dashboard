import { useState } from 'react'

import './App.css'
import HightPressureNetwork from './components/slides/HightPressureNetwork'
import TemperatureHumidity from './components/TemperatureHumidity'

function App() {

  return (
    <div className="grid grid-cols-12 gap-4 max-h-[98vh]">
      <div className="col-span-9">
        <HightPressureNetwork />
      </div>
      <div className='col-span-3'>
        <TemperatureHumidity />
      </div>
    </div>
  )
}

export default App
