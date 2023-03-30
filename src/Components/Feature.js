import React from 'react'
import { Featurebox } from './Featurebox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/1.svg'
import fimage3 from '../images/1.svg'
import fimage4 from '../images/1.svg'

export const Feature = () => {
    return (
        <div id='features'>
            <h1>Features</h1>
            <div className='a-container'></div>
            <Featurebox image={fimage1} title="WeightLifting"/>
            <Featurebox image={fimage2} title="Specific Muscle"/>
            <Featurebox image={fimage3} title="Flex your muscle"/>
            <Featurebox image={fimage4} title="Cardio Excercise"/>
        </div>
      )
}
