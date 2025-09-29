import React from 'react'

function Hofer() {
  return (
    <div className=''>
      <h2>HOFER Compressors</h2>
      <h3>Output - 950 BAR</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-700 mb-1">This is the first line of text.</p>
          <p className="text-gray-600">This is the second line of text.</p>
        </div>
        <div className="bg-red-500 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-700 mb-1">This is the first line of text.</p>
          <p className="text-gray-600">This is the second line of text.</p>
        </div>
      </div>
    </div>
  )
}

export default Hofer