import React, { useState } from 'react'
import CardDetais from './CardDetais';
import MoreDetails from './MoreDetails';


function PersonData(props) {

    const [personData, setPersonData] = useState(
        [
            {
                name:'Saina Nehwal',
                age:31,
                image:<img src='/Saina.jpg' className='image'/>
            },
            {
                name:' PV Sindhu',
                age:26,
                
                image:<img src='/PV Sindhu.jpg' className='image'/>
            },
            {
                name:'Jhulan Goswami',
                
                age:39,
                
                image:<img src='/Jhulan Goswami.webp' className='image'/>
            },
            {
                name:'Mithali Raj',
                age:39,
                image:<img src='/Mithali.jpg' className='image'/>
            },
        ]
    )

    return (
        <div>
            <CardDetais personData={personData}/>      
        </div>
    )
}

export default PersonData
