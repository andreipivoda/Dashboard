import React from 'react'
import SimpleCard from './SimpleCard'
import MyGauge from './MyGauge'

export default function ComplexCard({title,date,isOnline}) {
    return (
        <div>
            <SimpleCard title={title} date={'2025-01-01 17:55:01'} isOnline={isOnline}>
                <MyGauge />
            </SimpleCard>

        </div>
    )
}
