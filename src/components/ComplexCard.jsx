import React from 'react'
import SimpleCard from './SimpleCard'
import MyGauge from './MyGauge'

export default function ComplexCard() {
    return (
        <div>
            <SimpleCard>
                <MyGauge />
            </SimpleCard>

        </div>
    )
}
