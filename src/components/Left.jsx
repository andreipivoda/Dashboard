import React from 'react'
import Burton from './Burton'
import Maximator from './Maximator'


export default function Left() {
  return (
    <div className='min-h-[94vh] flex flex-col justify-around border rounded-2xl border-gray-400 mx-4'>
      <Burton />
      <Maximator/>
    </div>
  )
}
