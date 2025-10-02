import './App.css'
import React, { createContext, useEffect, useState } from 'react';
import HightPressureNetwork from './components/slides/HightPressureNetwork'
import TemperatureHumidity from './components/TemperatureHumidity'
import { DataProvider  } from './components/DataContext';





function App() {


  return (
    <DataProvider>
    <div className="grid grid-cols-12 gap-4 max-h-[98vh]">
      <div className="col-span-9">
        <HightPressureNetwork />
      </div>
      <div className='col-span-3'>
        <TemperatureHumidity />
      </div>
    </div>
    </DataProvider>
  )
}

export default App
