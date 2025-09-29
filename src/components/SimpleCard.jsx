import React from 'react'

export default function SimpleCard({ title, children }) {
    return (
        <div className="border border-gray-400 rounded-lg shadow p-2">
            <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
            <p className="text-gray-700 text-center">This is the first line of text.</p>
            <p className="text-gray-600 text-center">This is the second line of text.</p>
            <p className="text-gray-600 text-center">This is the second line of text.</p>
            <div className="mt-4 flex justify-center">
                {children}
            </div>
        </div>
    )
}
