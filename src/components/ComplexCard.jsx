import React from 'react'
import SimpleCard from './SimpleCard'
import MyGauge from './MyGauge'

export default function ComplexCard({title,date,isOnline,value}) {
    
    return (
        <div>
            <SimpleCard title={title} date={date} isOnline={isOnline}>
                <MyGauge value={value}/>
            </SimpleCard>
        </div>
    )
}
