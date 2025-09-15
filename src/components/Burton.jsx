import React from 'react'

function Burton() {

  const compressors = [
    { title: 'Compressor 2 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 3 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 4 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },
    { title: 'Compressor 5 (ACH)', time: "2025-09-15 14:40:00", elapsed: "14 ore 44 minute" },

  ];
  return (
    <div className='max-w-1/2'>
      <h2>Burton Corblin Compressors</h2>
      <h3>Output - 550 BAR</h3>

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

export default Burton