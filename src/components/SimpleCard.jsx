import React from 'react'

export default function SimpleCard({ title, date, isOnline,children }) {
    return (
        <div className="border border-gray-400 rounded-lg shadow p-2">
            <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
            <p className="text-gray-700 text-center">{date}</p>
            <p className="text-gray-600 text-center">14 ore 22 minute</p>
            {isOnline == true && <p className="text-gray-600 text-center my-4">Cooling system - ON</p>}
            {isOnline == false && <p className="text-gray-600 text-center my-4">Cooling system - OFF</p>}
            <div className="mt-4 flex justify-center">
                {children}
            </div>
        </div>
    )
}
